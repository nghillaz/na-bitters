enum IngredientCategory { }

export function getFlavorDetails(flavor: IngredientFlavor): {
  name: string;
  color: string;
} {
  switch (flavor) {
    case IngredientFlavor.Bitter:
      return {
        name: "Bitter",
        color: "black",
      };
    case IngredientFlavor.Sweet:
      return {
        name: "Sweet",
        color: "pink",
      };
    case IngredientFlavor.Licorice:
      return {
        name: "Licorice",
        color: "#1B1212",
      };
    case IngredientFlavor.Warming:
      return {
        name: "Warming",
        color: "#D47E30"
      }
    case IngredientFlavor.Earth:
      return {
        name: "Earth",
        color: "#806043"
      }
    case IngredientFlavor.Musk:
      return {
        name: "Musk",
        color: "#CCA195",
      }
    case IngredientFlavor.Smoke:
      return {
        name: "Smoke",
        color: "#C9D0D2"
      }
    case IngredientFlavor.Camphor:
      return {
        name: "Camphor",
        color: "white",
      }
    case IngredientFlavor.Heat:
      return {
        name: "Heat",
        color: "#CB2004",
      };
    case IngredientFlavor.Citrus:
      return {
        name: "Citrus",
        color: "#FFAE42",
      };
    default:
      return {
        name: "<unknown flavor>",
        color: "magenta",
      };
  }
}

export enum IngredientSafety {
  Safe,
  Caution,
  Danger,
}


export enum IngredientFlavor {
  Bitter,
  Citrus,
  Sweet,
  Licorice,
  Warming,
  Earth,
  Musk,
  Smoke,
  Camphor,
  Heat,
}

export enum IngredientType {
  None,

  // A
  Allspice,
  AngelicaRoot, // TODO - navImage

  // B
  // C
  CardamomBlack,
  CardamomTsaoko,
  CardamomGreen,
  CinchonaBark,
  Cinnamon,
  Coriander,

  // D
  // E
  // F
  // G
  GrainsOfParadise,
  GrapefruitPeel,

  // H
  // I
  // J
  // K
  // L
  LemonPeel, // TODO
  LimePeel,

  // M
  // N
  Nutmeg,

  // O
  OrangePeel,

  // P
  BlackPepper,
  RedPepperFlake,
  WhitePepper,
  Patchouli,

  // Q
  // R
  // S
  SichuanPepper, // TODO
  StarAnise,

  // T
  // U
  // V
  // W
  // X
  // Y
  // Z

  // TODO
  Ginger,
  Dill,
  Caraway,
  Fennel,
  ChicoryRoot,
  Clove,
  Lemongrass,
  Rosemary,
  VanillaBean,
  AnnattoSeed,
  Elderflower,
  Lavender,
  Mint,
  BirchBark,
  BlackWalnutLeaf,
  Walnut,
  BlackWalnutHull,
  BuchuLeaf,
  BurdockRoot,
  CacaoNib,
  JuniperBerry,
  ChaparralLeaf,
  Chickweed,
  Hops,
  GentianRoot,
  SarsparillaRoot,
  Mace,
  SassafrasBark,
  Wormwood,
  QuassiaChip,
  WildCherryBark,
  Genepi,

  /*To consider
      chrysanthemum
      chamomile
      blackberry, raspberry, blueberry, cranberry, etc
      vitex berries
      elder berry
      fennel
      ginkgo
      green tea / matcha
      jasmine flower
      valerian root
      sesame seeds - various colors
      bay leaf
      basil
      bergamot
      mustard
      cumin
      caraway
      celery seed
      chili pepper
      chives
      cilantro
      curry
      dill
      fennel
      fenugreek - mention estrogen
      ginger
      oregano
      parsley
      saffron
      sage
      tarragon
      thyme
      turmeric root
      ashwagandha
      dandelion root
      eucalyptus leaf
      ginseng
      hyssop
      jalapeno, habanero, etc
      licorice root
      milk thistle - mention allergy to ragweed
      grape root
      prickly ash bark
      rose hips
      */
}
