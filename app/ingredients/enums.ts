enum IngredientCategory {}

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
    default:
      return {
        name: "<unknown flavor>",
        color: "magenta",
      };
  }
}

export enum IngredientFlavor {
  Bitter,
  Sweet,
  Licorice,
}

export enum IngredientType {
  None,

  // A
  Allspice,
  AngelicaRoot, // TODO - navImage

  // B
  // C
  Cardamom,
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
