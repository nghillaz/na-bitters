import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function GrapefruitPeel(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Grapefruit Peel",
    navPic: images.grapefruit,
    flavors: [IngredientFlavor.Bitter, IngredientFlavor.Citrusy],
    links: [
      { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grapefruit" },
      {
        caption: "Wikipedia (Drug Interactions)",
        url: "https://en.wikipedia.org/wiki/Grapefruit%E2%80%93drug_interactions",
      },
    ],
    safety: {
      level: IngredientSafety.Caution,
      details: [
        "Grapefruit interacts with a number of drugs, resulting in adverse effects.",
      ],
    },
  };
}
