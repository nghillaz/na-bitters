import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function RedPepperFlake(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Red Pepper Flake",
    navPic: images.redpepperflake,
    scientificName: "capsicum annuum",
    flavors: [IngredientFlavor.Spicy],
    facts: [
      "Made from a variety of peppers in the capsicum annum family but primarily cayenne.",
    ],
    recommendations: [
      'My primary use is for adding "kick" to my bitters to simulate alcohol burn',
    ],
    safety: {
      level: IngredientSafety.Safe,
    },
    pairsWith: [],
    links: [
      {
        caption: "Wikipedia (Capsicum annuum)",
        url: "https://en.wikipedia.org/wiki/Capsicum_annuum",
      },
    ],
  };
}
