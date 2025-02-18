import { Link } from "react-router";
import "./about.css";

export function About() {
  return (
    <div>
      <header>
        <Link to="/">Game</Link>
      </header>
      <main>
        <h4>
          <li>Stockholm 🇸🇪</li>
          <li>Oslo 🇳🇴</li>
          <li>Barcelona 🇪🇸</li>
          <li>Berlin 🇩🇪</li>
          <li>Paris 🇫🇷</li>
          <li>Helsinki 🇫🇮</li>
          <li>Reykjavik 🇮🇸</li>
          <li>Rome 🇮🇹</li>
          <li>London 🏴󠁧󠁢󠁥󠁮󠁧󠁿</li>
          <li>Riga 🇱🇻</li>
          <li>Copenhagen 🇩🇰</li>
          <li>Prague 🇨🇿</li>
          <li>Tallinn 🇪🇪</li>
          <li>Budapest 🇭🇺</li>
          <li>Dublin 🇮🇪</li>
          <li>Vilnius 🇱🇹</li>
          <li>Amsterdam 🇳🇱</li>
          <li>Lisbon 🇵🇹</li>
          <li>Bern 🇨🇭</li>
          <li>Madrid 🇪🇸</li>
          <li>Tirana 🇦🇱</li>
        </h4>
      </main>
    </div>
  );
}
