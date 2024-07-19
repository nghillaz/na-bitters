import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function AngelicaRoot(): IIngredientContent {
  return {
    isFinished: true,
    caption: "Angelica Root",
    navPic: images.angelicaroot,
    facts: [
      "Contains Cyclopentadecanolide, a synthetic musk often used in perfume",
    ],
    safety: {
      level: IngredientSafety.Caution,
      details: [
        "Do not consume during pregnancy.",
        "Do not consume if you take anticoagulant medications due to a risk of uncontrolled bleeding.",
        "Furanocoumarins may increase photosensitivity to UV radiation.",
      ],
    },
    links: [
      {
        caption: "Herb Co",
        url: "https://www.herbco.com/p-1280-angelica-root-cs.aspx",
      },
      {
        caption: "Wikipedia (Cyclopentadecanolide)",
        url: "https://en.wikipedia.org/wiki/Cyclopentadecanolide",
      },
    ],
    scientificName: "Angelica archangelica",
    flavors: [IngredientFlavor.Earthy, IngredientFlavor.Musky],
    pairsWith: [
      IngredientType.Patchouli,
      IngredientType.LemonPeel,
      IngredientType.OrangePeel,
      IngredientType.LimePeel,
      IngredientType.GrapefruitPeel,
      // TODO - try some of these combos
    ],
  };
}
