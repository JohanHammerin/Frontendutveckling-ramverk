const getFox = async () => {
  const result = await fetch("https://randomfox.ca/floof/");
  const data = await result.json();
  console.log(data);
};

const getLordOfTheRings = async () => {
  const result = await fetch(
    "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
  );
  const data = await result.json();
  console.log("title: " + data.docs[0].title);
};

getLordOfTheRings();
