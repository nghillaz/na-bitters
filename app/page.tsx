"use client";

import Image, { StaticImageData } from "next/image";
import images from "./images/_index";
import { Suspense, useCallback, useState } from "react";
import { Kalam } from "next/font/google";
import { Home } from "./home";
import { Ingredients } from "./ingredients/ingredients";
import { Recipes } from "./recipes/recipes";
import { Button } from "./_components/button";
import { IContentProps, IGlobalState, PageType } from "./_components/_common";

const archivo = Kalam({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function Main() {
  const [globalState, _] = useState<IGlobalState>({
    selectedPage: PageType.Home,
    popupEnabled: false,
  });

  const setSelectedPage = useCallback(
    (selectedPage: PageType) => {
      const newGlobalState: IGlobalState = {
        ...globalState,
        selectedPage,
      };
      _(newGlobalState);
    },
    [globalState]
  );

  const setPopupEnabled = useCallback((popupEnabled: boolean) => {
    const newGlobalState: IGlobalState = {
      ...globalState,
      popupEnabled,
    };
    _(newGlobalState);
    ;
  }, [globalState]);

  const props = {
    ...globalState,
    setSelectedPage,
    setPopupEnabled,
  };

  return (
    <Suspense>
      <div className="app">
        <div className="page">
          <div>
            <div className="header">
              <div className="title">
                <Image src={images.title} width={59.375} height={37.5} alt="" />
                <div className={archivo.className + " text"}>Bitters</div>
              </div>
              <div className="navigationBar">
                <NavigationLink {...props} type={PageType.Home} />
                <NavigationLink {...props} type={PageType.Ingredients} />
                <NavigationLink {...props} type={PageType.Recipes} />
              </div>
            </div>
          </div>
          <div className="belowTitle">
            <Content {...props} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

function NavigationLink(
  props: IGlobalState & { type: PageType; setSelectedPage: Function, setPopupEnabled: Function }
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

  return (
    <Button
      caption={caption}
      image={pic}
      isSelected={props.selectedPage === props.type}
      onSelect={() => props.setSelectedPage(props.type)}
    />
  );
}

function Content(props: IContentProps) {
  let content: JSX.Element | null = null;
  switch (props.selectedPage) {
    case PageType.Home:
      content = <Home {...props}/>;
      break;
    case PageType.Ingredients:
      content = <Ingredients {...props} />;
      break;
    case PageType.Recipes:
      content = <Recipes {...props}/>;
      break;
  }

  return <div className="content">{content}</div>;
}
