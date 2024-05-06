"use client";

import Image, { StaticImageData } from "next/image";
import ingredientsPic from "../images/ingredients.png";
import recipesPic from "../images/recipes.png";
import { Suspense, useCallback, useState } from "react";

enum PageType {
  None,
  Ingredients,
  Recipes,
}

interface IGlobalState {
  selectedPage: PageType;
}

export default function Home() {
  const [globalState, _] = useState<IGlobalState>({
    selectedPage: PageType.None,
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

  return (
    <main>
      <Suspense>
        <Core {...globalState} setSelectedPage={setSelectedPage} />
      </Suspense>
    </main>
  );
}

function Core(
  props: IGlobalState & {
    setSelectedPage: Function;
  }
) {
  return (
    <div className="full">
      <TitleBar {...props} />
      <div className="belowTitle">
        <NavigationBar {...props} />
        <Content {...props} />
      </div>
    </div>
  );
}

function TitleBar(props: IGlobalState) {
  return (
    <>
      <div className="titleBar">
        <div>N/A Bitters</div>
      </div>
    </>
  );
}

function NavigationBar(
  props: IGlobalState & {
    setSelectedPage: Function;
  }
) {
  return (
    <div onClick={(event) => event.stopPropagation()} className="navigationBar">
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
    default:
      caption = "Home";
      pic = ingredientsPic;
      break;
  }

  const isSelected = props.selectedPage === props.type;

  return (
    <div
      className={["navigationLink", isSelected ? "selected" : ""].join(" ")}
      onClick={() => props.setSelectedPage(props.type)}
    >
      <Image src={pic} width={50} height={50} alt="" />
      <div className="caption">{caption}</div>
      <div className="backgroundColor"/>
    </div>
  );
}

function Content(props: IGlobalState) {
  return <div className="content">{PageType[props.selectedPage]}</div>;
}
