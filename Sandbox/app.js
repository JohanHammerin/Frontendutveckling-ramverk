function fetchFunction() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      if (res.ok) {
        console.log("Success");
        return res.json();
      } else {
        throw new Error("Fetch failed");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
}

const syncArrowFunction = () => {
  console.log("Steg 1");
  console.log("Steg 2");
  console.log("Steg 3");
};

const asyncArrowFunction = () => {
  console.log("Steg 1");
  setTimeout(() => {
    console.log("Steg2");
  }, 2000);
  console.log("Steg 3");
};

const fetchArrowFunction = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/20e");
    if (!res.ok) {
      throw new Error();
    }
    let data = await res.json();
    console.log("title: ", data.title);
    console.log("body: ", data.body);
  } catch (error) {
    console.log("Fel: ", error);
  }
};

fetchArrowFunction();
