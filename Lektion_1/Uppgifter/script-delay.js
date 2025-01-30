//Uppgift 1-3

function firstFunction() {
  const first = 1;
  const second = 2;
  const third = 3;
  const fourth = 4;
  const fifth = 5;
}

function secondFunction(age, name) {
  age = 21;
  name = "Johan";
}

function thirdFunction() {
  console.log("Hello from the thirdFunction!");
}

function fourthFunction() {
  return "Hello World";
}

function callingFunction() {
  firstFunction();
  secondFunction(10, "Hej");
  thirdFunction();
  fourthFunction();
}

//callingFunction();

//Uppgift 4

const firstArrowFunction = () => {
  const first = 10;
  const second = 20;
  const third = 30;
  const fourth = 40;
  const fifth = 50;
};

const secondArrowFunction = (firstNum, secondNum) => {
  firstNum + secondNum;
};

const thirdArrowFunction = () => {
  console.log("Hello from the thirdArrowFunction");
};

const fourthArrowFunction = () => {
  return "Hello World";
};

const callingArrowFunction = () => {
  firstArrowFunction();
  secondArrowFunction(10, 20);
  thirdArrowFunction();
  fourthArrowFunction();
};

callingArrowFunction();

//Uppgift 5

function delayFunction() {
  setTimeout(() => {
    console.log("This message was delayed");
  }, "2000");
}

//delayFunction();

//Uppgift 6

const delayArrowFunction = (millisecondsDelay, message) => {
  setTimeout(() => {
    console.log(message);
  }, millisecondsDelay);
};

//delayArrowFunction(10_000, "Hej Hej!");

//Uppgift 7

const smartTimeout = (delayInMilliseconds, message, repeatCount) => {
  if (!Number.isInteger(repeatCount) || repeatCount <= 0) {
    repeatCount = 1;
  }

  if (delayInMilliseconds <= 0) {
    console.log("Error: invalid delay");
  } else {
    for (let i = 0; i < repeatCount; i++) {
      setTimeout(() => {
        console.log(message);
      }, delayInMilliseconds * i);
    }
  }
};

smartTimeout(1000, "Hej", 10);
