import { StaticImageData } from "next/image";
import images from "./images/_index";

export interface IIngredientContent {
    caption: string;
    pic: StaticImageData;
}

export function getContent(type: IngredientType): IIngredientContent | null {
    switch (type) {
        case IngredientType.StarAnise:
            return {
                caption: "Star Anise",
                pic: images.starAnise,
            };
        case IngredientType.GrainsOfParadise:
            return {
                caption: "Grains of Paradise",
                pic: images.grainsOfParadise,
            };
        case IngredientType.OrangePeel:
            return {
                caption: "Orange Peel",
                pic: images.orange,
            };
        case IngredientType.Nutmeg:
            return {
                caption: "Nutmeg",
                pic: images.nutmeg,
            };
        case IngredientType.LimePeel:
            return {
                caption: "Lime Peel",
                pic: images.lime,
            };
        case IngredientType.GrapefruitPeel:
            return {
                caption: "Grapefruit Peel",
                pic: images.grapefruit,
            };
        default:
        case IngredientType.SichuanPepper:
            return {
                caption: "Sichuan Pepper",
                pic: images.sichuanpepper,
            };
    }
}

export enum IngredientType {
    StarAnise,
    Nutmeg,
    GrainsOfParadise,
    OrangePeel,
    LemonPeel,
    LimePeel,
    GrapefruitPeel,

    // Could use improvement
    SichuanPepper,

    // TODO
    Coriander,
    Cardamom,
    Allspice,
    AngelicaRoot,
    BlackPepper,
    WhitePepper,
    RedPepperFlake,
    Cinnamon,
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