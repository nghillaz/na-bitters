import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function BlackPepper(): IIngredientContent {
  return {
    caption: "Pepper, Black",
    navPic: images.blackpepper,
    scientificName: "Piper nigrum",
    showForTesting: true,
    facts: [],
    flavors: [IngredientFlavor.Spicy, IngredientFlavor.Earthy],
    links: [],
    safety: { level: IngredientSafety.Safe },
  };
}
