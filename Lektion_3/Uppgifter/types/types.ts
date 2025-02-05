interface Book {
  name: string;
  author: string;
  amountOfPages: number;
  isPublished: boolean;
}

interface student {
  name: string;
  age: number;
  books: Book[];
}

export interface Animal {
  species: string;
  canFly: boolean;
  makeSound: () => {};
}
