import { useState } from "react";
import { IButtonProps, IconButton, LaunchButton } from "../_components/button";
import { Filter } from "@/app/_components/filter";
import { IIngredientContent, getContent } from "./content";
import { Popup } from "../_components/popup";
import { IContentProps, enumToList } from "../_components/_common";
import Image from "next/image";
import images from "../images/_index";
import { IngredientFlavor, IngredientType, getFlavorDetails } from "./enums";
import "./ingredients.css";

export function Ingredients(props: IContentProps) {
  const [selectedIngredient, setSelectedIngredient] =
    useState<IngredientType | null>(null);
  const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(
    null
  );

  const ingredientContent = getContent(selectedIngredient);
  const ingredientTypes = enumToList<IngredientType>(IngredientType);
  const flavors = enumToList<IngredientFlavor>(IngredientFlavor);

  return (
    <div className="ingredients" onClick={() => setSelectedIngredient(null)}>
      <div className="ingredientsFilters">
        <Filter
          prompt="Flavors"
          options={flavors.map((f) => {
            return { name: getFlavorDetails(f).name, key: f };
          })}
          selections={flavorFilters ?? []}
          setSelections={setFlavorFilters}
        />
      </div>
      <IngredientList
        ingredients={ingredientTypes}
        flavorFilters={flavorFilters}
        selectedIngredient={selectedIngredient}
        setSelectedIngredient={setSelectedIngredient}
      />
      <Popup
        visible={!!selectedIngredient}
        content={
          <div className="ingredientContent">
            <div className="ingredientImage">
              <Image
                className="actualImage"
                src={ingredientContent?.detailPic ?? images.ingredients}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="ingredientTitle">{ingredientContent?.caption}</div>
            {ingredientContent?.flavors?.map((f) => {
              const flavorDetails = getFlavorDetails(f);
              return (
                <div
                  className="ingredientFlavor"
                  key={flavorDetails.name}
                  style={{ backgroundColor: flavorDetails.color }}
                >
                  {flavorDetails.name}
                </div>
              );
            })}
            <div>{ingredientContent?.description}</div>
            <div>Pairs With</div>
            <IngredientList
              ingredients={ingredientContent?.pairsWith}
              setSelectedIngredient={setSelectedIngredient}
              flavorFilters={null}
              selectedIngredient={null}
            />
            <div>Sources</div>
            {ingredientContent?.herbCoLink ? (
              <LaunchButton
                caption="Herb Co"
                url={ingredientContent.herbCoLink}
              />
            ) : null}
          </div>
        }
        onClose={() => setSelectedIngredient(null)}
      />
    </div>
  );
}

function IngredientList(props: {
  ingredients: IngredientType[] | undefined;
  flavorFilters: IngredientFlavor[] | null;
  selectedIngredient: IngredientType | null;
  setSelectedIngredient: Function;
}) {
  return (
    <div className="ingredientsList">
      {props.ingredients?.map((type) => {
        const content = getContent(type);
        if (!content) {
          return null;
        }
        if (
          props.flavorFilters?.length &&
          !content.flavors?.some((f) => props.flavorFilters?.includes(f))
        ) {
          return null;
        }
        return (
          <Ingredient
            {...content}
            isSelected={props.selectedIngredient === type}
            onSelect={() => props.setSelectedIngredient(type)}
            key={type}
          />
        );
      })}
    </div>
  );
}

function Ingredient(
  props: IIngredientContent & Pick<IButtonProps, "isSelected" | "onSelect">
) {
  return (
    <IconButton
      caption={props.caption}
      pic={props.navPic}
      isSelected={props.isSelected}
      onSelect={props.onSelect}
    />
  );
}
