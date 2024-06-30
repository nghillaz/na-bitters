import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function LimePeel(): IIngredientContent {
  return {
    caption: "Lime Peel",
    scientificName: "Citrus latifolia",
    facts: [
      "While there are a number of varieties of lime, the persian lime is the most commercially available due to its large size and absence of seeds.",
    ],
    navPic: images.lime,
    flavors: [IngredientFlavor.Bitter, IngredientFlavor.Citrusy],
    showForTesting: true,
    links: [
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Persian_lime",
      },
    ],
    safety: { level: IngredientSafety.Safe },
    pairsWith: [
      IngredientType.OrangePeel,
      IngredientType.GrapefruitPeel,
      IngredientType.LemonPeel,
    ],
  };
}
