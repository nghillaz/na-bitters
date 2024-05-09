"use client";

import Image, { StaticImageData } from "next/image";
import images from "./images/_index";
import { Suspense, useCallback, useState } from "react";
import { Kalam } from "next/font/google";
import { Home } from "./home";
import { Ingredients } from "./ingredients/ingredients";
import { Recipes } from "./recipes/recipes";
import { Button } from "./_components/button";

const archivo = Kalam({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
});

enum PageType {
  Home,
  Ingredients,
  Recipes,
}

interface IGlobalState {
  selectedPage: PageType;
}

export default function Main() {
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
          <div className="header">
            <div className="title">
              <Image src={images.title} width={118.75} height={75} alt="" />
              <div className={archivo.className + " text"}>Bitters</div>
            </div>
            <div className="navigationBar">
              <NavigationLink {...props} type={PageType.Home} />
              <NavigationLink {...props} type={PageType.Ingredients} />
              <NavigationLink {...props} type={PageType.Recipes} />
            </div>
          </div>
          <div className="belowTitle">
            <Content {...props} />
          </div>
        </div >
      </div>
    </Suspense>
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
      pic = images.ingredients;
      break;
    case PageType.Recipes:
      caption = "Recipes";
      pic = images.recipes;
      break;
    case PageType.Home:
    default:
      caption = "Home";
      pic = images.home;
      break;
  }

  return <Button caption={caption} image={pic} isSelected={props.selectedPage === props.type} onSelect={() => props.setSelectedPage(props.type)} />
}

function Content(props: IGlobalState) {
  let content: JSX.Element | null = null;
  switch (props.selectedPage) {
    case PageType.Home:
      content = <Home />
      break;
    case PageType.Ingredients:
      content = <Ingredients />;
      break;
    case PageType.Recipes:
      content = <Recipes />;
      break;
  }

  return <div className="content">
    {content}
  </div>
}

export function classList(names: string[]){
  return names.filter(n => n.length).join(" ");
}