import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Pepper(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Pepper",
    navPic: images.blackpepper,
    scientificName: "Piper nigrum",
    facts: [
      "Black pepper is produced from the green unripe fruit of Piper nigrum, which turns dark while drying in the sun",
      "White pepper is black pepper with the darker-colored skin removed",
      "Green pepper is black pepper that has been pickled or dehydrated quickly to avoid losing its green color",
      "Fresh green pepper is hard to come by, as the fruit decays quickly and can't be shipped or stored effectively",
      "Red pepper is produced from the red ripe fruit and had its color preserved similarly to green pepper",
    ],
    flavors: [IngredientFlavor.Spicy, IngredientFlavor.Earthy],
    links: [
      { caption: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black_pepper" },
    ],
    safety: { level: IngredientSafety.Safe },
  };
}
