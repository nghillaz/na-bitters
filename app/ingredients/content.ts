import { StaticImageData } from "next/image";
import images from "./images/_index";
import { IngredientFlavor, IngredientType } from "./enums";

export interface IIngredientContent {
  caption: string;
  navPic: StaticImageData;
  detailPic?: StaticImageData;
  description?: string;
  flavors?: IngredientFlavor[];
  herbCoLink?: string;
}

export function getContent(
  type: IngredientType | null
): IIngredientContent | null {
  switch (type) {
    case IngredientType.StarAnise:
      return {
        caption: "Star Anise",
        navPic: images.starAnise,
        description: "star anise",
      };
    case IngredientType.GrainsOfParadise:
      return {
        caption: "Grains of Paradise",
        navPic: images.grainsOfParadise,
        description: "grains",
      };
    case IngredientType.OrangePeel:
      return {
        caption: "Orange Peel",
        navPic: images.orange,
        description: "ora",
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.Nutmeg:
      return {
        caption: "Nutmeg",
        navPic: images.nutmeg,
        description: "nutmeg",
      };
    case IngredientType.LimePeel:
      return {
        caption: "Lime Peel",
        navPic: images.lime,
        description: "lime",
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.GrapefruitPeel:
      return {
        caption: "Grapefruit Peel",
        navPic: images.grapefruit,
        description: "grapefruit",
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.Coriander:
      return {
        caption: "Coriander",
        navPic: images.coriander,
        description: "coriander",
      };
    case IngredientType.Cardamom:
      return {
        caption: "Cardamom",
        navPic: images.cardamom,
        description: "cardamom",
      };
    case IngredientType.Allspice:
      return {
        caption: "Allspice",
        navPic: images.allspice,
      };
    case IngredientType.AngelicaRoot:
      return {
        caption: "Angelica Root",
        navPic: images.angelicaroot,
      };
    case IngredientType.BlackPepper:
      return {
        caption: "Black Pepper",
        navPic: images.blackpepper,
      };
    case IngredientType.WhitePepper:
      return {
        caption: "White Pepper",
        navPic: images.whitepepper,
      };
    case IngredientType.RedPepperFlake:
      return {
        caption: "Red Pepper Flakes",
        navPic: images.redpepperflake,
      };
    case IngredientType.Cinnamon:
      return {
        caption: "Cinnamon",
        navPic: images.cinnamon,
      };
    case IngredientType.BirchBark:
      return {
        caption: "Birch Barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrk",
        navPic: images.cinnamon,
        detailPic: images.cinnamon,
        herbCoLink: "https://www.herbco.com/p-699-birch-bark-cs.aspx",
      };
    default:
      return null;
  }
}
