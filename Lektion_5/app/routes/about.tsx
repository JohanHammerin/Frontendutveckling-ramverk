import type { Route } from "./+types/home";
import { About } from "../about/about"; // <--

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" }, //<--
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutRoute() {
  return <About />; //<--
}
