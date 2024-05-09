import { useState } from "react";
import { CloseButton, Button } from "../_components/button";
import { StaticImageData } from "next/image";
import { Filter } from "@/app/_components/filter";
import images from "./images/_index";
import "./ingredients.css";
import { IngredientType, getContent } from "./content";
import { Popup } from "../_components/popup";

export function Ingredients() {
    const [selectedIngredient, setSelectedIngredient] = useState<IngredientType | null>(null);
    const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(null);

    return <div className="ingredients" onClick={() => setSelectedIngredient(null)}>
        <div className="ingredientsFilters">
            <Filter prompt="abc" options={[{ name: "abcd", key: "123" }]} disabled={!!selectedIngredient} />
        </div>
        <div className="ingredientsList">
            {Object.values(IngredientType)
                .sort()
                .filter(type => isNaN(type as any))
                .map(type =>
                    <Ingredient
                        type={IngredientType[type as any] as any}
                        isSelected={selectedIngredient === type}
                        onSelect={() => setSelectedIngredient(type as IngredientType)}
                        disabled={!!selectedIngredient}
                        key={type}
                    />
                )}
        </div>
        <Popup visible={!!selectedIngredient} onClose={() => setSelectedIngredient(null)} />
    </div>;
}

function Ingredient(props: { type: IngredientType, isSelected: boolean, onSelect: Function, disabled: boolean }) {
    const content = getContent(props.type)
    if (!content) { return <></>; }
    return <Button caption={content.caption} image={content.pic} isSelected={props.isSelected} onSelect={props.onSelect} disabled={props.disabled} />
}

enum FilterType {
    Category,
    Flavor,
}

enum IngredientCategory {

}

enum IngredientFlavor {
    Bitter,
    Sweet,
}
