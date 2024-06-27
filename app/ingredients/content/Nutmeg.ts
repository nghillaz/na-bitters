import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Nutmeg(): IIngredientContent {
    return {
        caption: "Nutmeg",
        navPic: images.nutmeg,
        facts: [
            'The spice mace is produced from nutmeg\'s seed covering.',
            'Can be expressed to create nutmeg butter.',
        ],
        showForTesting: true,
        recommendations: [
            "Crack in a mortar and pestle before use to increase surface area and penetration into the aromatic interior.",
        ],
        flavors: [IngredientFlavor.Warming],
        links: [
            { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nutmeg" },
            { caption: "FAO (Nutmeg Butter)", url: "https://web.archive.org/web/20170529061404/http://www.fao.org/docrep/v4084e/v4084e04.htm" },
        ],
        safety: {
            level: IngredientSafety.Caution, details: [
                "Can cause psychoactive effects in excessive quantities.",
            ]
        },
    };
}
