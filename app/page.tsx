"use client";

import Image, { StaticImageData } from "next/image";
import ingredientsPic from "../images/ingredients.png";
import recipesPic from "../images/recipes.png";
import homePic from "../images/home.png";
import { Suspense, useCallback, useState } from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
});

enum PageType {
  Home,
  Ingredients,
  Recipes,
}

interface IGlobalState {
  selectedPage: PageType;
}

export default function Home() {
  const [globalState, _] = useState<IGlobalState>({
    selectedPage: PageType.Home,
  });

  const setSelectedPage = useCallback(
    (newPage: PageType) => {
      const newGlobalState: IGlobalState = {
        ...globalState,
        selectedPage: newPage,
      };
      _(newGlobalState);
    },
    [globalState]
  );

  const props = {
    ...globalState,
    setSelectedPage,
  }

  return (
    <Suspense>
      <div className="app">
        <div className="page">
          <div className={archivo.className + " title"}>N/A Bitters</div>
          <div className="belowTitle">
            <NavigationBar {...props} />
            <Content {...props} />
          </div>
        </div >
      </div>
    </Suspense>
  );
}

function NavigationBar(
  props: IGlobalState & {
    setSelectedPage: Function;
  }
) {
  return (
    <div className="navigationBar">
      <NavigationLink {...props} type={PageType.Home} />
      <NavigationLink {...props} type={PageType.Ingredients} />
      <NavigationLink {...props} type={PageType.Recipes} />
    </div>
  );
}

function NavigationLink(
  props: IGlobalState & { type: PageType; setSelectedPage: Function }
) {
  let caption = "";
  let pic: StaticImageData;
  switch (props.type) {
    case PageType.Ingredients:
      caption = "Ingredients";
      pic = ingredientsPic;
      break;
    case PageType.Recipes:
      caption = "Recipes";
      pic = recipesPic;
      break;
    case PageType.Home:
    default:
      caption = "Home";
      pic = homePic;
      break;
  }

  const isSelected = props.selectedPage === props.type;

  return (
    <div
      className={["navigationLink", isSelected ? "selected" : ""].join(" ")}
      onClick={() => props.setSelectedPage(props.type)}
    >
      <div className="navigationIcon">
        <Image src={pic} width={75} height={75} alt="" />
        <div className="caption">{caption}</div>
      </div>
    </div>
  );
}

function Content(props: IGlobalState) {
  return <div className="content">
    <div>{PageType[props.selectedPage]}</div>
  </div>
}
