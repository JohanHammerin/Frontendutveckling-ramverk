const obj = {
  name: "Object",
  greet() {
    console.log(this.name);
  },
};

obj.greet();

const secondObj = {
  name: "Object",
  greet: () => {
    console.log(this.name);
  },
};

secondObj.greet();
