import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function CinchonaBark(): IIngredientContent {
  return {
    caption: "Cinchona Bark",
    navPic: images.cinchonabark,
    scientificName: "Cinchona officinalis",
    showForTesting: true,
    facts: [
      "Historical effective treatment for malaria"
    ],
    safety: {
      level: IngredientSafety.Danger,
      details: [
        "Contains high quantities of quinine, an anti-malarial, and quinidine, an antiarrhythmic.",
        "Can cause serious life threatening blood and cardiovascular reactions.",
        "Unless you have a reliable way to measure alkaloid content, this ingredient comes with a lot of risk.",
      ],
    },
    links: [
      {
        caption: "Wikipedia (Cinchona)",
        url: "https://en.wikipedia.org/wiki/Cinchona",
      },
      {
        caption: "Risks of Making Your Own Tonic",
        url: "https://talesofthecocktail.org/products/risks-making-your-own-tonic/",
      },
      {
        caption: "Wikipedia (Quinine)",
        url: "https://en.wikipedia.org/wiki/Quinine",
      },
      {
        caption: "Wikipedia (Quinidine)",
        url: "https://en.wikipedia.org/wiki/Quinidine",
      },
      {
        caption: "Wikipedia (Cinchonism)",
        url: "https://en.wikipedia.org/wiki/Cinchonism",
      },
    ],
    pairsWith: [
      IngredientType.Ginger, IngredientType.Clove,
    ],
  };
}