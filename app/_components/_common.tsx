import { userAgent } from "next/server";

export function classList(names: string[]) {
  return names.filter((n) => n.length).join(" ");
}

export function enumToList<TEnumType>(enumVal: Object): TEnumType[] {
  return Object.keys(enumVal).filter(item => !isNaN(Number(item))).map(type => { return Number(type) as TEnumType });
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

export const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent.name);