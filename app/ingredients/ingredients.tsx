import { useState } from "react";
import { Button } from "../_components/button";
import { Filter } from "@/app/_components/filter";
import "./ingredients.css";
import { IngredientFlavor, IngredientType, getContent, getFlavorName } from "./content";
import { Popup } from "../_components/popup";
import { IContentProps, enumToList } from "../_components/_common";
import { StaticImageData } from "next/image";

export function Ingredients(props: IContentProps) {
  const [selectedIngredient, setSelectedIngredient] = useState<IngredientType | null>(null);
  const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(null);

  const ingredientContent = getContent(selectedIngredient);
  const ingredientTypes = enumToList<IngredientType>(IngredientType);
  const flavors = enumToList<IngredientFlavor>(IngredientFlavor);

  return (
    <div className="ingredients" onClick={() => setSelectedIngredient(null)}>
      <div className="ingredientsFilters">
        <Filter
          prompt="Flavors"
          options={flavors.map(f => { return { name: getFlavorName(f), key: f } })}
          selections={flavorFilters ?? []}
          setSelections={setFlavorFilters}
        />
      </div>
      <div className="ingredientsList">
        {ingredientTypes.map((type) => {
          const content = getContent(type);
          if (!content) { return null; }
          console.log("flavorFilters: " + flavorFilters);
          console.log("contentFilters: " + content.flavors);
          console.log(typeof flavorFilters?.[0]);
          console.log(typeof content.flavors?.[0]);
          if (flavorFilters?.length && !content.flavors?.some(f => flavorFilters.includes(f))) { return null; }
          return <Ingredient
            type={type}
            isSelected={selectedIngredient === type}
            onSelect={() => setSelectedIngredient(type)}
            disabled={!!selectedIngredient}
            key={type}
            caption={content.caption}
            pic={content.pic}
          />
        })}
      </div>
      <Popup
        visible={!!selectedIngredient}
        content={<div>{ingredientContent?.description}</div>}
        onClose={() => setSelectedIngredient(null)}
      />
    </div>
  );
}

function Ingredient(props: {
  type: IngredientType;
  isSelected: boolean;
  onSelect: Function;
  disabled: boolean;
  caption: string;
  pic: StaticImageData;
}) {
  return (
    <Button
      className="navButton"
      caption={props.caption}
      pic={props.pic}
      isSelected={props.isSelected}
      onSelect={props.onSelect}
      disabled={props.disabled}
    />
  );
}

enum FilterType {
  Category,
  Flavor,
}