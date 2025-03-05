import { useEffect, useState } from "react";
import { CustomCard } from "~/components/CustomCard";
import { ProductCard } from "~/components/ProductCard";
import type { BlogCard, Product } from "~/types/BlogCard";

export function Welcome() {
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);
  //useEffect - Hook (lifecycle function)
  //Every Hook always contain the therm 'use'
  useEffect(() => {
    console.log("Hello World!");

    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const products: Product[] = await result.json();
      setProductList(products);
    }

    fetchData();
  }, []);

  const [count, setCount] = useState<number>(0);

  /*
  Prerequesits for Loops in .tsx
  #1. Array-list
  #2. Map through list (within .tsx)
  */
  /*
   */
  const [highScoreList, setHighScoreList] = useState<number[]>([
    150, 250, 500, 1000,
  ]);

  const [blogCardList, setBlogCardList] = useState<BlogCard[]>([
    {
      title: "Flowers",
      content: "Beatiful flowers in a scenery",
      tags: "#Flowers",
    },
    {
      title: "Singular flower",
      content: "The beauty of nature is truly astounding",
      tags: "#Nature",
    },
  ]);
  /*

  function test() {
    //() => {} 0 parametrar / void
    //() => ({}) 0 parametrar / object
    //() => () 0 parametrar / number (implicitly)
  }

  //For loops can be used outside of return scope
  for (let i = 0; i < 5; i++) {}
*/
  //.tsx syntax may not return 'void'
  //callbackfn (callback function) - We can pass arrow functions
  return (
    <div>
      {/*highScoreList.map((value: number, index: number) => (
        <p>
          Did this work?{value} {index}
        </p>
      ))*/}

      {/* Generate Components */}
      {blogCardList.map(({ title, content, tags }) => (
        <CustomCard title={title} content={content} tags={tags} />
      ))}

      <button
        onClick={() => {
          console.log("click");
          setCount(count + 1);
        }}
      >
        Count + 1
      </button>

      <div>
        {/* Loop through products */}
        {productList.map(
          ({ id, title, price, description, category, image, rating }) => (
            <ProductCard
              key={id} //Reacts need the KEY
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}
