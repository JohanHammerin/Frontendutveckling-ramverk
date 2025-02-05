import { Animal } from "./types/types";

function printVariables() {
  const firstName: string = "Johan";
  const firstNum: number = 20;
  const isTrue: boolean = true;
  const numList: number[] = [1, 2, 3];
  console.log(firstName + "\n" + firstNum + "\n" + isTrue + "\n" + numList);
}

//printVariables();

const firstAnimal: Animal = {
  species: "Bird",
  canFly: true,
  makeSound: function (): {} {
    throw new Error("Function not implemented.");
  },
};

const secondAnimal: Animal = {
  species: "Horse",
  canFly: false,
  makeSound: function (): {} {
    throw new Error("Function not implemented.");
  },
};

const zoo: Animal[] = [firstAnimal, secondAnimal];
console.log(zoo);
