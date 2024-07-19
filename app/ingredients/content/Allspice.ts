import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Allspice(): IIngredientContent {
    return {
        isFinished: true,
        caption: "Allspice",
        navPic: images.allspice,
        safety: { level: IngredientSafety.Safe },
        facts: [
          'Contains Eugenol, which gives the clove-like flavor to clove, nutmeg, cinnamon, basil, and bay leaf',
          "The \"all\" in its name is due to tasting like a combination of cinnamon, nutmeg, and clove",
        ],
        recommendations: [
          "Crack in a mortar and pestle before use to increase surface area and allow access to the aromatic internals.",
          'Use in combination with Star Anise/Pepper/Cinnamon/Clove/Nutmeg when you want to add "warmth" or "christmas" to your flavor profile',
        ],
        links: [
          {
            caption: "Herb Co",
            url: "https://www.herbco.com/p-1284-allspice-whole.aspx",
          },
          {
            caption: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Allspice",
          },
          {
            caption: "Wikipedia (Eugenol)",
            url: "https://en.wikipedia.org/wiki/Eugenol",
          },
        ],
        scientificName: "Pimenta dioica",
        flavors: [IngredientFlavor.Warming],
        pairsWith: [
          IngredientType.StarAnise,
          IngredientType.Pepper,
          IngredientType.CardamomGreen,
          IngredientType.Cinnamon,
          IngredientType.Clove,
          IngredientType.Coriander,
          IngredientType.GrainsOfParadise,
          IngredientType.Nutmeg,
        ],
      };
}