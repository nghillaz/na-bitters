export function classList(names: string[]) {
  return names.filter((n) => n.length).join(" ");
}

export type IContentProps = IGlobalState & {
    setSelectedPage: Function,
    setPopupEnabled: Function,
}

export interface IGlobalState {
  selectedPage: PageType;
  popupEnabled: boolean;
}

export enum PageType {
  Home,
  Ingredients,
  Recipes,
}