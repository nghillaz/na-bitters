import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function CardamomBlack(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Cardamom, Black",
    scientificName: "Amomum subulatum",
    navPic: images.cardamomblack,
    safety: {
      level: IngredientSafety.Safe,
    },
    facts: [
      "Not to be confused with Cardamom Tsaoko, often also called black cardamom.",
      "Has a distinct camphorous flavor that cools similarly to menthol.",
    ],
    links: [
      {
        caption: "Mountain Rose Herbs",
        url: "https://mountainroseherbs.com/black-cardamom-pods",
      },
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Black_cardamom",
      },
    ],
    recommendations: [],
    pairsWith: [], // TODO
    flavors: [IngredientFlavor.Camphorous, IngredientFlavor.Smoky],
  };
}
