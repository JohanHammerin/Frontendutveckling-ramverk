import type { Route } from "./+types/home";
import { Contact } from "../contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function contactRouter() {
  return <Contact />;
}
