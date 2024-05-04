'use client'

import { Common, NavigationBarSelections } from "../Common";

export default function Recipes() {
  return (
    <>
      <Common selectedItem={NavigationBarSelections.Recipes} />
    </>
  );
}
