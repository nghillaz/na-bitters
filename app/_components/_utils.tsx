export function classList(names: string[]){
    return names.filter(n => n.length).join(" ");
  }