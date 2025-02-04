import { User, Superhero, SideKick } from "./types/User";

function helloWorld() {
  console.log("Hello World");
}

function testDataTypes() {
  const name: string = "Mycket bra";
  const name2: String = "Inte bra"; // Not recommended (Capital s)

  const age: number = 21;
  const currency: number = 289.5;

  const isTired: boolean = true;
  const isLoggedIn: boolean = false;

  const highScoreList: number[] = [250, 150, 0];
  const usernameList: Array<string> = ["Benny", "Thomas", "Håkan Glazeman"];

  let x: [string, number];
  x = ["hello", 10];

  //Avoid the use of 'any'
  let anyDataType: any = "";
  anyDataType = 0;
  anyDataType = true;
}

function returnNothing() {} // void by default
function returnNothingExplicit(): void {}
function additionExample(): number {
  return 2 + 2;
}

const withoutInterface: { name: string; age: number } = {
  name: "",
  age: 5,
};

const user: User = {
  username: "",
  password: "",
};

const sideKick: SideKick = {
  name: "Glazeman",
  height: 10,
};

const superhero: Superhero = {
  name: "Hej",
  height: 150,
  color: "",
  power: "",
  sideKickList: [sideKick],
};

// approach --> without interface
function printCurrentUserWithoutInterface(user: { name: string; age: number }) {
  console.log(user);
}

function printCurrentUser(user: User) {
  console.log(user.username);
}

function printCurrentHero(superhero: Superhero) {
  console.log(superhero);
}

//Enum
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;

const benny: User = {
  username: "Benny",
  password: "123",
};

function subtractionExample(x: number, y: number): number {
  return x - y;
}

printCurrentUser(benny);
helloWorld();
const sum = subtractionExample("50", 25);
console.log(sum);
