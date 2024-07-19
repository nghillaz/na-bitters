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
import OrangePeel from "./content/OrangePeel";
import Patchouli from "./content/Patchouli";
import Pepper from "./content/Pepper";
import RedPepperFlake from "./content/RedPepperFlake";
import ChicoryRoot from "./content/ChicoryRoot";
import Clove from "./content/Clove";

export interface IIngredientContent {
  caption: string;
  navPic: StaticImageData;
  scientificName?: string;
  facts?: string[];
  recommendations?: string[];
  flavors?: IngredientFlavor[];
  pairsWith?: IngredientType[];
  links?: { caption: string; url: string }[];
  safety?: { level: IngredientSafety; details?: string[] };
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
    case IngredientType.ChicoryRoot:
      return ChicoryRoot();
    case IngredientType.CardamomTsaoko:
      return CardamomTsaoko();
    case IngredientType.CinchonaBark:
      return CinchonaBark();
    case IngredientType.Cinnamon:
      return Cinnamon();
      case IngredientType.Clove:
        return Clove();
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
      return OrangePeel();

    // P
    case IngredientType.Patchouli:
      return Patchouli();
    case IngredientType.Pepper:
      return Pepper();

    // Q
    // R
    case IngredientType.RedPepperFlake:
      return RedPepperFlake();

    // S
    case IngredientType.StarAnise:
      return StarAnise();
    default:
      return null;
  }
}
