import { Link } from "react-router";
import "./home.css";

export function Home() {
  return (
    <div className="home-container">
      <div>
        <p>Test1</p>
      </div>
      <div>
        <Link to="/about">about</Link>
        <br />
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}
