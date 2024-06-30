import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function ChicoryRoot(): IIngredientContent {
  return {
    caption: "Chicory Root, Roasted",
    scientificName: "Cichorium intybus",
    navPic: images.chicoryroot,
    showForTesting: true,
    flavors: [
      IngredientFlavor.Roasted,
      IngredientFlavor.Earthy,
      IngredientFlavor.Sweet,
    ],
    facts: [
      "Primary source of Inulin, a dietary fiber and sweetener",
      "Used as a caffeine-free coffee substitute",
    ],
    links: [
      {
        caption: "Herb Co",
        url: "https://www.herbco.com/p-456-chicory-root-roasted-granules.aspx",
      },
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Chicory",
      },
      {
        caption: "Wikipedia (Inulin)",
        url: "https://en.wikipedia.org/wiki/Inulin",
      },
    ],
    safety: {
      level: IngredientSafety.Safe,
    },
  };
}
