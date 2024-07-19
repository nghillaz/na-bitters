import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function CardamomTsaoko(): IIngredientContent {
  return {
    isFinished: true,
    caption: "Cardamom, Tsaoko",
    navPic: images.cardamomtsaoko,
    scientificName: "Lanxangia tsaoko",
    facts: [
      "Alternatively labeled as thảo quả, cǎo guǒ, or 草果",
      "Often called black cardamom due to previously being a part of the cardamom Amomum genus.",
      'Reclassified into its own separate "Lanxangia" genus, it can be less confusingly referred to as just "tsaoko"',
      "Mellower than its cardamom cousins, it's more suited to savory dishes, broths, and meats",
    ],
    safety: {
      level: IngredientSafety.Safe,
    },
    links: [
      {
        caption: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Lanxangia_tsaoko",
      },
    ],
    recommendations: [
      "Try sourcing from a local Chinese or Indian grocery store",
      "Use the pod whole, optionally toasted, as the shell contains a lot of the smokey savory flavor",
    ],
    pairsWith: [], // TODO
    flavors: [IngredientFlavor.Smoky],
  };
}
