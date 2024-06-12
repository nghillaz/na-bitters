import { StaticImageData } from "next/image";
import images from "./images/_index";
import { IngredientFlavor, IngredientSafety, IngredientType } from "./enums";

export interface IIngredientContent {
  caption: string;
  navPic: StaticImageData;
  detailPic?: StaticImageData;
  scientificName?: string;
  facts?: string[];
  recommendations?: string[];
  flavors?: IngredientFlavor[];
  pairsWith?: IngredientType[];
  links?: { caption: string; url: string }[];
  safety?: IngredientSafety;
  isFinished?: boolean;
}

export function getContent(
  type: IngredientType | null
): IIngredientContent | null {
  switch (type) {
    // A
    case IngredientType.Allspice:
      return {
        isFinished: true,
        caption: "Allspice",
        navPic: images.allspice,
        safety: IngredientSafety.Safe,
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
          IngredientType.BlackPepper,
          IngredientType.Cardamom,
          IngredientType.Cinnamon,
          IngredientType.Clove,
          IngredientType.Coriander,
          IngredientType.GrainsOfParadise,
          IngredientType.Nutmeg,
        ],
      };
    case IngredientType.AngelicaRoot:
      return {
        caption: "Angelica Root",
        navPic: images.angelicaroot,
      };

    // B
    // C
    case IngredientType.Cardamom:
      return {
        caption: "Cardamom",
        navPic: images.cardamom,
      };
    case IngredientType.Cinnamon:
      return {
        caption: "Cinnamon",
        navPic: images.cinnamon,
      };
    case IngredientType.Coriander:
      return {
        caption: "Coriander",
        navPic: images.coriander,
      };

    // D
    // E
    // F
    // G
    case IngredientType.GrainsOfParadise:
      return {
        caption: "Grains of Paradise",
        navPic: images.grainsOfParadise,
      };
    case IngredientType.GrapefruitPeel:
      return {
        caption: "Grapefruit Peel",
        navPic: images.grapefruit,
        flavors: [IngredientFlavor.Bitter],
      };

    // H
    // I
    // J
    // K
    // L
    case IngredientType.LimePeel:
      return {
        caption: "Lime Peel",
        navPic: images.lime,
        flavors: [IngredientFlavor.Bitter],
      };

    // M
    // N
    case IngredientType.Nutmeg:
      return {
        caption: "Nutmeg",
        navPic: images.nutmeg,
        detailPic: images.nutmegDetail,
        safety: IngredientSafety.Caution,
      };

    // O
    case IngredientType.OrangePeel:
      return {
        caption: "Orange Peel",
        navPic: images.orange,
        flavors: [IngredientFlavor.Bitter],
      };

    // P
    case IngredientType.BlackPepper:
      return {
        caption: "Black Pepper",
        navPic: images.blackpepper,
      };
    case IngredientType.RedPepperFlake:
      return {
        caption: "Red Pepper Flakes",
        navPic: images.redpepperflake,
      };
    case IngredientType.WhitePepper:
      return {
        caption: "White Pepper",
        navPic: images.whitepepper,
      };

    // Q
    // R
    // S
    case IngredientType.StarAnise:
      return {
        isFinished: true,
        caption: "Star Anise",
        navPic: images.starAnise,
        detailPic: images.starAniseDetail,
        safety: IngredientSafety.Safe,
        facts: [
          "Contains Anethole, which gives anise and fennel their licorice flavor.",
          'Commonly used in spice mixtures like Chinese Five-Spice, "Warming" Spice, and "Baking" Spice.',
        ],
        recommendations: [
          "Grind up slightly in a mortar and pestle before use to increase surface area and release seeds.",
          'Use in combination with Allspice/Pepper/Cinnamon/Clove/Nutmeg when you want to add "warmth" or "christmas" to your flavor profile',
        ],
        links: [
          {
            caption: "Herb Co",
            url: "https://www.herbco.com/p-703-star-anise-whole.aspx",
          },
          {
            caption: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Illicium_verum",
          },
          {
            caption: "Wikipedia (Anethole)",
            url: "https://en.wikipedia.org/wiki/Anethole",
          },
        ],
        scientificName: "Illicium verum",
        flavors: [IngredientFlavor.Licorice, IngredientFlavor.Sweet],
        pairsWith: [
          IngredientType.Allspice,
          IngredientType.BlackPepper,
          IngredientType.Cardamom,
          IngredientType.Cinnamon,
          IngredientType.Clove,
          IngredientType.Coriander,
          IngredientType.GrainsOfParadise,
          IngredientType.Nutmeg,
        ],
      };
    default:
      return null;
  }
}
