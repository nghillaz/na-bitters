import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Coriander(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Coriander",
    scientificName: "Coriandrum sativum",
    navPic: images.coriander,
    facts: [
      "Sourced from the same plant as cilantro (cilantro from the leaves and coriander from the dried seeds).",
      "Commonly used as a pickling brine ingredient to add a citrus flavor.",
    ],
    recommendations: ["Toast before use to enhance the flavor."],
    flavors: [IngredientFlavor.Warming, IngredientFlavor.Citrusy],
    pairsWith: [
      IngredientType.Pepper,
      IngredientType.Caraway,
      IngredientType.Fennel,
    ],
    links: [
      { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coriander" },
    ],
  };
}
