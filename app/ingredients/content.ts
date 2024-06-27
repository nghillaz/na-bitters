import { StaticImageData } from "next/image";
import images from "./content/images/_index";
import { IngredientFlavor, IngredientSafety, IngredientType } from "./enums";
import Allspice from "./content/Allspice";
import AngelicaRoot from "./content/AngelicaRoot";
import CardamomTsaoko from "./content/CardamomTsaoko";
import CardamomGreen from "./content/CardamomGreen";
import StarAnise from "./content/StarAnise";
import Cinnamon from "./content/Cinnamon";
import Coriander from "./content/Coriander";
import GrainsOfParadise from "./content/GrainsOfParadise";
import GrapefruitPeel from "./content/GrapefruitPeel";
import LimePeel from "./content/LimePeel";
import Nutmeg from "./content/Nutmeg";
import CinchonaBark from "./content/CinchonaBark";
import CardamomBlack from "./content/CardamomBlack";

export interface IIngredientContent {
  caption: string;
  navPic: StaticImageData;
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
    case IngredientType.CardamomBlack:
      return CardamomBlack();
    case IngredientType.CardamomGreen:
      return CardamomGreen();
    case IngredientType.CardamomTsaoko:
      return CardamomTsaoko();
    case IngredientType.CinchonaBark:
      return CinchonaBark();
    case IngredientType.Cinnamon:
      return Cinnamon();
    case IngredientType.Coriander:
      return Coriander();

    // D
    // E
    // F
    // G
    case IngredientType.GrainsOfParadise:
      return GrainsOfParadise();
    case IngredientType.GrapefruitPeel:
      return GrapefruitPeel();

    // H
    // I
    // J
    // K
    // L
    case IngredientType.LimePeel:
      return LimePeel();

    // M
    // N
    case IngredientType.Nutmeg:
      return Nutmeg();

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
