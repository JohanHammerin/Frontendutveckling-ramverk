import { type RouteConfig, index, route } from "@react-router/dev/routes";

//Home / Landing page
export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
