fetch("https://jsonplaceholder.typicode.com/posts/99")
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
