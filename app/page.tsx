"use client";

import Image from "next/image";
import emailPic from "../images/email-outline.svg";
import menuPic from "../images/menu.svg";
import { Suspense, useCallback, useState } from "react";

enum PageType {
  None,
  Ingredients,
  Recipes,
}

interface IGlobalState {
  selectedPage: PageType;
  isNavigationExpanded: boolean;
}

export default function Home() {
  const [globalState, _] = useState<IGlobalState>({
    selectedPage: PageType.None,
    isNavigationExpanded: false,
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

  const setIsNavigationExpanded = useCallback(
    (newValue: boolean) => {
      const newGlobalState: IGlobalState = {
        ...globalState,
        isNavigationExpanded: newValue,
      };
      _(newGlobalState);
    },
    [globalState]
  );

  return (
    <main>
      <Suspense>
        <Core
          {...globalState}
          setIsNavigationExpanded={setIsNavigationExpanded}
          setSelectedPage={setSelectedPage}
        />
      </Suspense>
    </main>
  );
}

function Core(
  props: IGlobalState & {
    setIsNavigationExpanded: Function;
    setSelectedPage: Function;
  }
) {
  return (
    <div className="full" onClick={() => props.setIsNavigationExpanded(false)}>
      <TitleBar {...props} />
      <div className="belowTitle">
        <NavigationBar {...props} />
        <Content {...props} />
      </div>
    </div>
  );
}

function TitleBar(props: IGlobalState & { setIsNavigationExpanded: Function }) {
  return (
    <>
      <div className="titleBar">
        <Image
          src={menuPic}
          width={100}
          height={100}
          alt=""
          onClick={(event) => {
            props.setIsNavigationExpanded(!props.isNavigationExpanded);
            event.stopPropagation();
          }}
        />
        <p>N/A Bitters</p>
      </div>
    </>
  );
}

function NavigationBar(
  props: IGlobalState & {
    setIsNavigationExpanded: Function;
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
  switch (props.type) {
    case PageType.Ingredients:
      caption = "Ingredients";
      break;
    case PageType.Recipes:
      caption = "Recipes";
      break;
  }

  const isSelected = props.selectedPage === props.type;

  return (
    <div
      className={[
        "navigationLink",
        props.isNavigationExpanded ? "expanded" : "",
      ].join(" ")}
      onClick={() => props.setSelectedPage(props.type)}
    >
      <div
        className={["selectionStrip", isSelected ? "selected" : ""].join(" ")}
      />
      <Image src={emailPic} width={50} height={50} alt="" />
      <div
        className={[
          "caption",
          props.isNavigationExpanded ? "expanded" : "",
        ].join(" ")}
      >
        {caption}
      </div>
    </div>
  );
}

function Content(props: IGlobalState) {
  return <div className="content">{PageType[props.selectedPage]}</div>;
}
