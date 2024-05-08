import { useState } from "react";
import { CloseButton, Button } from "../components/button";
import orangePic from "../images/ingredients/orange.png";
import { StaticImageData } from "next/image";
import "./ingredients.css";
import { Filter } from "@/components/filter";

export function Ingredients() {
    const [selectedIngredient, setSelectedIngredient] = useState<IngredientType | null>(null);
    const [flavorFilters, setFlavorFilters] = useState<IngredientFlavor[] | null>(null);

    return <div className="ingredients">
        <div className="ingredientsFilters">
            <Filter prompt="abc" options={[{ name: "abcd", key: "123" }]} />
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
        <div className={["ingredientDescription", selectedIngredient !== null ? "expanded" : ""].join(" ")}>
            <CloseButton onClick={() => setSelectedIngredient(null)} />
        </div>
    </div>;
}

function Ingredient(props: { type: IngredientType, isSelected: boolean, onSelect: Function, disabled: boolean }) {
    let caption = "";
    let pic: StaticImageData;
    switch (props.type) {
        case IngredientType.StarAnise:
            caption = "Star Anise";
            pic = orangePic;
            break;
        case IngredientType.Nutmeg:
            caption = "Nutmeg";
            pic = orangePic;
            break;
        case IngredientType.GrainsOfParadise:
            caption = "Grains of Paradise";
            pic = orangePic;
            break;
        case IngredientType.OrangePeel:
            caption = "Orange Peel";
            pic = orangePic;
            break;
        case IngredientType.LemonPeel:
            caption = "Lemon Peel";
            pic = orangePic;
            break;
        case IngredientType.SichuanPepper:
            caption = "Sichuan Pepper";
            pic = orangePic;
            break;
        default:
            caption = "Lemon Peel";
            pic = orangePic;
            break;
    }
    return <Button caption={caption} image={pic} isSelected={props.isSelected} onSelect={props.onSelect} disabled={props.disabled} />
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

enum IngredientType {
    // Spices
    StarAnise,
    Nutmeg,
    GrainsOfParadise,
    // Citrus
    OrangePeel,
    LemonPeel,
    LimePeel,
    GrapefruitPeel,
    SichuanPepper,
    // Roots
}