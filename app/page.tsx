'use client'

import { Common, NavigationBarSelections } from "./Common";

export default function Home() {
  return (
    <main>
      <Common selectedItem={NavigationBarSelections.None}/>
    </main>
  );
}
