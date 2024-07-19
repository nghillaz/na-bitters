import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Clove(): IIngredientContent {
    return {
        showForTesting: true,
        caption: "Clove",
        navPic: images.clove,
        safety: { level: IngredientSafety.Safe },
        facts: [
            "Cloves are the flower buds of the Syzygium aromaticum tree",
            'Contains Eugenol, which gives the clove-like flavor to clove, nutmeg, cinnamon, basil, and bay leaf',
        ],
        recommendations: [
        ],
        links: [
            { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clove" },
            { caption: "Wikipedia (Eugenol)", url: "https://en.wikipedia.org/wiki/Eugenol" },
        ],
        scientificName: "Syzygium aromaticum",
        flavors: [],
        pairsWith: [
            IngredientType.Cinnamon,
            IngredientType.CardamomGreen,
            IngredientType.StarAnise,
        ],
    };
}
