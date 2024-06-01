import { useState } from "react";
import { IButtonProps, IconButton, LaunchButton } from "../_components/button";
import { Filter } from "@/app/_components/filter";
import { IIngredientContent, getContent } from "./content";
import { Popup } from "../_components/popup";
import { IContentProps, enumToList } from "../_components/_common";
import Image from "next/image";
import images from "../images/_index";
import { IngredientFlavor, IngredientType, getFlavorName } from "./enums";
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
            return { name: getFlavorName(f), key: f };
          })}
          selections={flavorFilters ?? []}
          setSelections={setFlavorFilters}
        />
      </div>
      <div className="ingredientsList">
        {ingredientTypes.map((type) => {
          const content = getContent(type);
          if (!content) {
            return null;
          }
          console.log("flavorFilters: " + flavorFilters);
          console.log("contentFilters: " + content.flavors);
          console.log(typeof flavorFilters?.[0]);
          console.log(typeof content.flavors?.[0]);
          if (
            flavorFilters?.length &&
            !content.flavors?.some((f) => flavorFilters.includes(f))
          ) {
            return null;
          }
          return (
            <Ingredient
              {...content}
              isSelected={selectedIngredient === type}
              onSelect={() => setSelectedIngredient(type)}
              key={type}
            />
          );
        })}
      </div>
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
            <div>{ingredientContent?.description}</div>
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
