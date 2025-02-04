// Export makes it possible to import elsewhere
export interface User {
  //PascalCase på interface
  username: string;
  password: string;
}

export interface Superhero {
  name: string;
  height: number;
  color: string;
  power: string;
  sideKickList: SideKick[];
}

export interface SideKick {
  name: string;
  height: number;
}
