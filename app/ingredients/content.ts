import { StaticImageData } from "next/image";
import images from "./images/_index";
import { IngredientFlavor, IngredientType } from "./enums";

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
}

export function getContent(
  type: IngredientType | null
): IIngredientContent | null {
  switch (type) {
    case IngredientType.StarAnise:
      return {
        caption: "Star Anise",
        navPic: images.starAnise,
        detailPic: images.starAniseDetail,
        facts: [
          "Contains Anethole, which gives anise and fennel their licorice flavor.",
          'Commonly used in spice mixtures like Chinese Five-Spice, "Warming" Spice, and "Baking" Spice.',
        ],
        recommendations: [
          "Grind up slightly in a mortar and pestle before use to increase surface area and release seeds.",
          'Use in combination with Allspice/Pepper/Cinnamon/Nutmeg when you want to add "warmth" or "christmas" to your flavor profile',
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
    case IngredientType.GrainsOfParadise:
      return {
        caption: "Grains of Paradise",
        navPic: images.grainsOfParadise,
      };
    case IngredientType.OrangePeel:
      return {
        caption: "Orange Peel",
        navPic: images.orange,
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.Nutmeg:
      return {
        caption: "Nutmeg",
        navPic: images.nutmeg,
      };
    case IngredientType.LimePeel:
      return {
        caption: "Lime Peel",
        navPic: images.lime,
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.GrapefruitPeel:
      return {
        caption: "Grapefruit Peel",
        navPic: images.grapefruit,
        flavors: [IngredientFlavor.Bitter],
      };
    case IngredientType.Coriander:
      return {
        caption: "Coriander",
        navPic: images.coriander,
      };
    case IngredientType.Cardamom:
      return {
        caption: "Cardamom",
        navPic: images.cardamom,
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
        flavors: [IngredientFlavor.Bitter],
      };
    default:
      return null;
  }
}
