import { useState } from "react";
import { IButtonProps, IconButton, LaunchButton } from "../_components/button";
import { Filter } from "@/app/_components/filter";
import { IIngredientContent, getContent } from "./content";
import { Popup } from "../_components/popup";
import { IContentProps, classList, enumToList } from "../_components/_common";
import Image from "next/image";
import images from "../images/_index";
import { IngredientFlavor, IngredientSafety, IngredientType, getFlavorDetails } from "./enums";
import "./ingredients.scss";

export function Ingredients(props: IContentProps) {
  const [selectedIngredient, setSelectedIngredient] =
    useState<IngredientType | null>(null);
  const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(
    null
  );

  const ingredientContent = getContent(selectedIngredient);
  // TODO - this is inefficient. Remove at some point
  const ingredientTypes = enumToList<IngredientType>(IngredientType).filter(f => getContent(f)?.isFinished);
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
          ingredientContent ?
            <div className="ingredientContent">
              <h1 className="ingredientTitle">
                {ingredientContent.caption ?? "<CAPTION>"}
              </h1>
              <div className="scientificName">
                {ingredientContent.scientificName ?? "<SCIENTIFIC NAME>"}
              </div>
              <div className="ingredientImage">
                <Image
                  className="actualImage"
                  src={ingredientContent.detailPic ?? images.ingredients}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                {ingredientContent.flavors?.map((f) => {
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
                }) ?? "<FLAVORS>"}
              </div>
              <IngredientBulletPoints title="" points={ingredientContent.facts} />
              <IngredientBulletPoints title="Recommendations" points={ingredientContent.recommendations} />
              <IngredientBulletPoints title="Safety" points={ingredientContent.safety?.details} safetyLevel={ingredientContent.safety?.level} />
              {ingredientContent.pairsWith?.length ?
                <div>
                  <h3>Pairs With</h3>
                  <br />
                  {ingredientContent.pairsWith?.length ?
                    <IngredientList
                      ingredients={ingredientContent.pairsWith}
                      setSelectedIngredient={setSelectedIngredient}
                      flavorFilters={null}
                      selectedIngredient={null}
                    /> : "<PAIRS WITH>"}
                </div> : null}
              <div>
                <h3>Sources</h3>
                <br />
                {ingredientContent.links?.map((l) => (
                  <LaunchButton key={l.caption} {...l} />
                )) ?? "<SOURCES>"}
              </div>
            </div> : <></>
        }
        onClose={() => setSelectedIngredient(null)}
      />
    </div>
  );
}

function IngredientBulletPoints(props: {
  title: string | undefined;
  points: string[] | undefined;
  safetyLevel?: IngredientSafety;
}) {
  return props.points?.length ? <>
    <div className={classList([
      "ingredientPointsContainer",
      getSafetyLevelClassName(props.safetyLevel),
    ])}>
      {props.title ? <h3 className="ingredientPointsTitle">{props.title}</h3> : null}
      <br />
      <ul className="ingredientPoints">
        {props.points.map((p) => (
          <li key={p}>{p}</li>
        )) ?? "<EMPTY>"}
      </ul>
    </div><br /></> : <></>
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
    <>
      <IconButton
        caption={props.caption}
        pic={props.navPic}
        isSelected={props.isSelected}
        onSelect={props.onSelect}
        className={classList([
          "ingredientSafetyIcon",
          getSafetyLevelClassName(props.safety?.level),
        ])} />
    </>
  );
}

function getSafetyLevelClassName(level: IngredientSafety | undefined) {
  switch (level) {
    case IngredientSafety.Safe:
      return "safe";
    case IngredientSafety.Caution:
      return "caution";
    case IngredientSafety.Danger:
      return "danger";
  }
  return "";
}