import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Cinnamon(): IIngredientContent {
  return {
    isFinished: true,
    caption: "Cinnamon",
    navPic: images.cinnamon,
    scientificName: "Cinnamomum cassia/verum",
    flavors: [IngredientFlavor.Warming],
    facts: [
      'There are two primary types of cinnamon - Cassia and Ceylon.',
      'Ceylon, considered "true" cinnamon, is the species sold as cinnamon sticks.',
      'Cassia comes in the form of chips, has a spicier flavor profile due to high cinnamaldehyde content, and is cheaper.',
    ],
    safety: { level: IngredientSafety.Safe, details: [
      'Coumarin, found naturally in many plants, is present in high concentrations in Cassia chips. Health agencies caution against high daily intake.'
    ]},
    pairsWith: [
      IngredientType.StarAnise,
      IngredientType.Pepper,
      IngredientType.CardamomGreen,
      IngredientType.GrainsOfParadise,
      IngredientType.Nutmeg,
    ],
    links: [
      {
        caption: "Wikipedia (Cassia)",
        url: "https://en.wikipedia.org/wiki/Cinnamomum_cassia",
      },
      {
        caption: "Wikipedia (Ceylon)",
        url: "https://en.wikipedia.org/wiki/Cinnamomum_verum",
      },
      {
        caption: "Wikipedia (Cinnamaldehyde)",
        url: "https://en.wikipedia.org/wiki/Cinnamomum_verum",
      },
      {
        caption: "Wikipedia (Coumarin)",
        url: "https://en.wikipedia.org/wiki/Coumarin",
      },
    ]
  };
}