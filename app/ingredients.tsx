import { useState } from "react";
import { CloseButton, Button } from "../components/button";
import { StaticImageData } from "next/image";
import "./ingredients.css";
import { Filter } from "@/components/filter";
import images from "../components/images";

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
            pic = images.starAnise;
            break;
        case IngredientType.GrainsOfParadise:
            caption = "Grains of Paradise";
            pic = images.grainsOfParadise;
            break;
        case IngredientType.OrangePeel:
            caption = "Orange Peel";
            pic = images.orange;
            break;
        case IngredientType.Nutmeg:
            caption = "Nutmeg";
            pic = images.nutmeg;
            break;
        case IngredientType.LimePeel:
            caption = "Lime Peel";
            pic = images.lime;
            break;
        case IngredientType.GrapefruitPeel:
            caption = "Grapefruit Peel";
            pic = images.grapefruit;
            break;
        case IngredientType.SichuanPepper:
            caption = "Sichuan Pepper";
            pic = images.sichuanpepper;
            break;
        default:
            caption = "Lemon Peel";
            pic = images.lemon;
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
    StarAnise,
    Nutmeg,
    GrainsOfParadise,
    OrangePeel,
    LemonPeel,
    LimePeel,
    GrapefruitPeel,

    // TODO
    SichuanPepper,
}