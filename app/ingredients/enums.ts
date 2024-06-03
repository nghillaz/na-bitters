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
  StarAnise,
  Nutmeg,
  GrainsOfParadise,
  OrangePeel,
  LemonPeel,
  LimePeel,
  GrapefruitPeel,
  Coriander,
  Cardamom,
  Allspice,
  BlackPepper,
  WhitePepper,
  RedPepperFlake,
  Cinnamon,

  // Could use improvement
  SichuanPepper,
  AngelicaRoot,

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
