import { useMemo, useState } from "react";
import { Button } from "../_components/button";
import { Filter } from "@/app/_components/filter";
import "./ingredients.css";
import { IngredientType, getContent } from "./content";
import { Popup } from "../_components/popup";
import { IContentProps } from "../_components/_common";

export function Ingredients(props: IContentProps) {
  const [selectedIngredient, setSelectedIngredient] =
    useState<IngredientType | null>(null);
  const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(
    null
  );

  const ingredientContent = useMemo(() => getContent(selectedIngredient), [selectedIngredient]);
  const ingredientTypes = useMemo(() => {
    return Object.keys(IngredientType).filter(item => !isNaN(Number(item))).map(type => { return Number(type) as IngredientType });
  }, []);

  return (
    <div className="ingredients" onClick={() => setSelectedIngredient(null)}>
      <div className="ingredientsFilters">
        <Filter
          prompt="abc"
          options={[{ name: "abcd", key: "123" }]}
          disabled={!!selectedIngredient}
        />
      </div>
      <div className="ingredientsList">
        {ingredientTypes.map((type) => (
          <Ingredient
            type={type}
            isSelected={selectedIngredient === type}
            onSelect={() => setSelectedIngredient(type)}
            disabled={!!selectedIngredient}
            key={type}
          />
        ))}
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
}) {
  const content = getContent(props.type);
  if (!content) {
    return <></>;
  }
  return (
    <Button
      caption={content.caption}
      image={content.pic}
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

enum IngredientCategory {}

enum IngredientFlavor {
  Bitter,
  Sweet,
}
