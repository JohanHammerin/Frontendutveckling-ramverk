import type { Product } from "~/types/BlogCard";

export function ProductCard(props: Product) {
  return (
    <div>
      <img src={props.image} alt="image" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>

      <footer>
        <p>{props.category}</p>
        <p>{props.rating.rate}</p>
        <p>{props.rating.count}</p>
      </footer>
    </div>
  );
}
