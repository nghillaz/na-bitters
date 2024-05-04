"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import emailPic from "../images/email-outline.svg"
import { Suspense } from "react";

export enum NavigationBarSelections {
  None,
  Ingredients,
  Recipes,
}

export function Common(props: {
  selectedItem: NavigationBarSelections;
}) {
  return <Suspense>
    <CommonInternal {...props} />
  </Suspense>
}

function CommonInternal(props: {
  selectedItem: NavigationBarSelections
}){
  const searchParams = useSearchParams();
  const previouslySelectedItem = searchParams.get("navFrom");

  return (
    <div className="navigationBar">
      <div className="title">N/A Bitters</div>
      <NavigationLink
        path="ingredients"
        caption="Ingredients"
        isSelected={props.selectedItem === NavigationBarSelections.Ingredients}
        wasSelected={previouslySelectedItem === "/ingredients"}
      />
      <NavigationLink
        path="recipes"
        caption="Recipes"
        isSelected={props.selectedItem === NavigationBarSelections.Recipes}
        wasSelected={previouslySelectedItem === "/recipes"}
      />
      <a href="mailto:nabitters@gmail.com"><Image src={emailPic} width={100} height={100} alt=""/></a>
    </div>
  );
}

function NavigationLink(props: {
  isSelected: boolean;
  wasSelected: boolean;
  path: string;
  caption: string;
}) {
  const currentPathName = usePathname();

  return (
    <div
      className={["navigationLink", props.wasSelected ? "selected" : ""].join(
        " "
      )}
      ref={(div) => {
        if (div) {
          setTimeout(() => {
            if (props.isSelected && !props.wasSelected) {
              div.classList.add("selected");
            }
            if (!props.isSelected && props.wasSelected) {
              div.classList.remove("selected");
            }
          }, 0);
        }
      }}
    >
      <Link href={"/" + props.path + "?navFrom=" + currentPathName}>
        {props.caption}
      </Link>
    </div>
  );
}
