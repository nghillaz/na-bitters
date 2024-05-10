import { StaticImageData } from "next/image";
import images from "./images/_index";
import { IngredientFlavor, IngredientType } from "./enums";

export interface IIngredientContent {
  caption: string;
  pic: StaticImageData;
  description?: string;
  flavors?: IngredientFlavor[];
}

export function getContent(
  type: IngredientType | null
): IIngredientContent | null {
  switch (type) {
    case IngredientType.StarAnise:
      return {
        caption: "Star Anise",
        pic: images.starAnise,
        description: "star anise",
      };
    case IngredientType.GrainsOfParadise:
      return {
        caption: "Grains of Paradise",
        pic: images.grainsOfParadise,
        description: "grains",
      };
    case IngredientType.OrangePeel:
      return {
        caption: "Orange Peel",
        pic: images.orange,
        description: "ora",
        flavors: [IngredientFlavor.Bitter]
      };
    case IngredientType.Nutmeg:
      return {
        caption: "Nutmeg",
        pic: images.nutmeg,
        description: "nutmeg",
      };
    case IngredientType.LimePeel:
      return {
        caption: "Lime Peel",
        pic: images.lime,
        description: "lime",
        flavors: [IngredientFlavor.Bitter]
      };
    case IngredientType.GrapefruitPeel:
      return {
        caption: "Grapefruit Peel",
        pic: images.grapefruit,
        description: "grapefruit",
        flavors: [IngredientFlavor.Bitter]
      };
    case IngredientType.Coriander:
      return {
        caption: "Coriander",
        pic: images.coriander,
        description: "coriander",
      }
    case IngredientType.Cardamom:
      return {
        caption: "Cardamom",
        pic: images.cardamom,
        description: "cardamom",
      }
    case IngredientType.Allspice:
      return {
        caption: "Allspice",
        pic: images.allspice,
      };
    case IngredientType.AngelicaRoot:
      return {
        caption: "Angelica Root",
        pic: images.angelicaroot,
      };
    case IngredientType.BlackPepper:
      return {
        caption: "Black Pepper",
        pic: images.blackpepper,
      };
    case IngredientType.WhitePepper:
      return {
        caption: "White Pepper",
        pic: images.whitepepper,
      };
    case IngredientType.RedPepperFlake:
      return {
        caption: "Red Pepper Flakes",
        pic: images.redpepperflake,
      };
    case IngredientType.Cinnamon:
      return {
        caption: "Cinnamon",
        pic: images.cinnamon,
      };
    default:
      return null;
  }
}