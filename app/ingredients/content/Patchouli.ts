import { IngredientFlavor, IngredientSafety, IngredientType } from "../enums";
import { IIngredientContent } from "../content";
import images from "./images/_index";

export default function Patchouli(): IIngredientContent {
  return {
    showForTesting: true,
    caption: "Patchouli",
    navPic: images.patchouli,
    scientificName: "Pogostemon cablin",
    facts: [
      "Used widely as a scent component in perfume, cologne, and cleaning products.",
      "Surged in popularity in the 1960s due to its adoption in hippie culture.",
    ],
    flavors: [IngredientFlavor.Earthy, IngredientFlavor.Musky],
    safety: {
      level: IngredientSafety.Safe,
    },
    links: [
      {
        caption: "Wikipedia (Patchoulol)",
        url: "https://en.wikipedia.org/wiki/Patchoulol",
      },
    ],
  };
}
