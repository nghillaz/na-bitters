import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function CardamomGreen(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Cardamom, Green",
    navPic: images.cardamomgreen,
    facts: [
    ],
    safety: {
      level: IngredientSafety.Safe
    },
    links: [
      {
        caption: "Herb Co",
        url: "https://www.herbco.com/p-331-cardamom-green-pods-whole.aspx",
      }
    ],
    pairsWith: [
      IngredientType.Ginger, IngredientType.Clove,
    ],
  };
}