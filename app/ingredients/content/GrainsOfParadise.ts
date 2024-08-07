import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function GrainsOfParadise(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Grains of Paradise",
    navPic: images.grainsofparadise,
    scientificName: "Aframomum melegueta",
    facts: [
      "Strong peppery flavor with mild heat and a hint of citrus and nutmeg.",
      "Commonly used in West and North African cuisine and uncommonly used as a pepper substitute elsewhere.",
    ],
    flavors: [IngredientFlavor.Spicy, IngredientFlavor.Citrusy],
    links: [
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Grains_of_paradise",
      },
    ],
    safety: { level: IngredientSafety.Safe },
  };
}
