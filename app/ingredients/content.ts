import { StaticImageData } from "next/image";
import images from "./content/images/_index";
import { IngredientFlavor, IngredientSafety, IngredientType } from "./enums";
import "./content/Allspice";
import Allspice from "./content/Allspice";
import AngelicaRoot from "./content/AngelicaRoot";
import CardamomTsaoko from "./content/CardamomTsaoko";
import CardamomGreen from "./content/CardamomGreen";
import StarAnise from "./content/StarAnise";

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
  safety?: { level: IngredientSafety, details?: string[] };
  isFinished?: boolean;
  showForTesting?: boolean;
}

export function getContent(
  type: IngredientType | null
): IIngredientContent | null {
  switch (type) {
    // A
    case IngredientType.Allspice:
      return Allspice();
    case IngredientType.AngelicaRoot:
      return AngelicaRoot();

    // B
    // C
    case IngredientType.CardamomGreen:
      return CardamomGreen();
    case IngredientType.CardamomTsaoko:
      return CardamomTsaoko();
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
      };

    // O
    case IngredientType.OrangePeel:
      return {
        caption: "Orange Peel",
        navPic: images.orange,
        flavors: [IngredientFlavor.Bitter],
      };

    // P
    case IngredientType.Patchouli:
      return {
        caption: "Patchouli",
        navPic: images.blackpepper,
      };
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
      return StarAnise();
    default:
      return null;
  }
}
