import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function OrangePeel(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Orange Peel",
    scientificName: "Citrus sinensis",
    facts: [""],
    navPic: images.orange,
    flavors: [IngredientFlavor.Citrusy],
    links: [
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Orange_(fruit)",
      },
    ],
    safety: { level: IngredientSafety.Safe },
    pairsWith: [
      IngredientType.LimePeel,
      IngredientType.GrapefruitPeel,
      IngredientType.LemonPeel,
    ],
  };
}
