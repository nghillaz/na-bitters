export function classList(names: string[]) {
  return names.filter((n) => n.length).join(" ");
}

export type IContentProps = IGlobalState & {
    setSelectedPage: Function,
}

export interface IGlobalState {
  selectedPage: PageType;
}

export enum PageType {
  Home,
  Ingredients,
  Recipes,
}