async function main() {
  console.log("Hello World :)");

  //IMPORTANT INFORMATION
  //Rule of thumb -> if its a promise, await it
  // fetch -> fox API (URL) -> Asynch (await)

  // const === Immutable (final)
  const bookFormInput = "the+lord+of+the+rings"; //form element - pretend
  const result = await fetch("https://randomfox.ca/floof/");
  const bookResult = await fetch(
    "https://openlibrary.org/search.json?q=" + bookFormInput
  );

  const foxData = await result.json(); // convert readablestream to json
  const bookData = await bookResult.json();

  console.log(foxData.image);
  console.log(bookData.docs[0].title);
}
// Start Function
main();
