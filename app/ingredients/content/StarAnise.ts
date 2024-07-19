import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function StarAnise(): IIngredientContent {
    return {
        isFinished: true,
        caption: "Star Anise",
        navPic: images.starAnise,
        safety: { level: IngredientSafety.Safe },
        facts: [
            "Contains Anethole, which gives anise and fennel their licorice flavor.",
            'Commonly used in spice mixtures like Chinese Five-Spice, "Warming" Spice, and "Baking" Spice.',
        ],
        recommendations: [
            "Grind up slightly in a mortar and pestle before use to increase surface area and release seeds.",
            'Use in combination with Allspice/Pepper/Cinnamon/Clove/Nutmeg when you want to add "warmth" or "christmas" to your flavor profile',
        ],
        links: [
            {
                caption: "Herb Co",
                url: "https://www.herbco.com/p-703-star-anise-whole.aspx",
            },
            {
                caption: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Illicium_verum",
            },
            {
                caption: "Wikipedia (Anethole)",
                url: "https://en.wikipedia.org/wiki/Anethole",
            },
        ],
        scientificName: "Illicium verum",
        flavors: [IngredientFlavor.Licorice, IngredientFlavor.Sweet],
        pairsWith: [
            IngredientType.Allspice,
            IngredientType.Pepper,
            IngredientType.CardamomGreen,
            IngredientType.Cinnamon,
            IngredientType.Clove,
            IngredientType.Coriander,
            IngredientType.GrainsOfParadise,
            IngredientType.Nutmeg,
        ],
    };
}
