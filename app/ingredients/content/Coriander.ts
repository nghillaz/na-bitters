import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Coriander(): IIngredientContent {
  return {
    caption: "Coriander",
    scientificName: "Coriandrum sativum",
    navPic: images.coriander,
    showForTesting: true,
    facts: [
      "Sourced from the same plant as cilantro (cilantro from the leaves and coriander from the dried seeds).",
      "Commonly used as a pickling brine ingredient to add a citrus flavor.",
    ],
    recommendations: [
      'Toast before use to enhance the flavor.',
    ],
    flavors: [
      IngredientFlavor.Warming, IngredientFlavor.Citrus,
    ],
    pairsWith: [
      IngredientType.BlackPepper, IngredientType.Caraway, IngredientType.Fennel,
    ],
    links: [
      { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coriander" }
    ],
  };
}