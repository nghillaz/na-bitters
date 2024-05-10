enum IngredientCategory { }

export function getFlavorName(flavor: IngredientFlavor) {
    switch (flavor) {
        case IngredientFlavor.Bitter:
            return "Bitter";
        case IngredientFlavor.Sweet:
            return "Sweet";
        default:
            return "<unknown flavor>";
    }
}

export enum IngredientFlavor {
    Bitter,
    Sweet,
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
