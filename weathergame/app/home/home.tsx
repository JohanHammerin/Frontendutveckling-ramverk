import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./home.css";
import "../cities/city";
import type { City } from "../cities/city";

export function Home() {
  const cities: City[] = [
    { name: "Stockholm 🇸🇪", longitude: "18.06324", latitude: "59.334591" },
    { name: "Oslo 🇳🇴", longitude: "10.757933", latitude: "59.911491" },
    { name: "Barcelona 🇪🇸", longitude: "2.15899", latitude: "41.38879" },
    { name: "Berlin 🇩🇪", longitude: "13.404954", latitude: "52.520008" },
    { name: "Paris 🇫🇷", longitude: "2.349014", latitude: "48.864716" },
    { name: "Helsinki 🇫🇮", longitude: "24.938379", latitude: "60.169857" },
    { name: "Reykjavik 🇮🇸", longitude: "-21.817438", latitude: "64.126518" },
    { name: "Rome 🇮🇹", longitude: "12.496365", latitude: "41.902782" },
    { name: "London 🏴󠁧󠁢󠁥󠁮󠁧󠁿", longitude: "-0.127758", latitude: "51.507351" },
    { name: "Riga 🇱🇻", longitude: "24.1060604", latitude: "56.9475636" },
    { name: "Copenhagen 🇩🇰", longitude: "12.6159319", latitude: "55.662352" },
    { name: "Prague 🇨🇿", longitude: "14.4191593", latitude: "50.0824379" },
    { name: "Tallinn 🇪🇪", longitude: "24.7439894", latitude: "59.4328402" },
    { name: "Budapest 🇭🇺", longitude: "19.054237", latitude: "47.4952113" },
    { name: "Dublin 🇮🇪", longitude: "-6.2673368", latitude: "53.3441204" },
    { name: "Vilnius 🇱🇹", longitude: "25.289479", latitude: "54.684752" },
    { name: "Amsterdam 🇳🇱", longitude: "4.89784", latitude: "52.36532" },
    { name: "Lisbon 🇵🇹", longitude: "-9.1388862", latitude: "38.7078405" },
    { name: "Bern 🇨🇭", longitude: "7.4523938", latitude: "46.9485497" },
    { name: "Madrid 🇪🇸", longitude: "-3.692517", latitude: "40.4192127" },
    { name: "Tirana 🇦🇱", longitude: "19.8168711", latitude: "41.3256062" },
  ];

  const [city, setCity] = useState<City>(cities[0]); // Startar med första staden
  const [temp, setTemp] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [guess, setGuess] = useState<string>(""); // Input för användarens gissning
  const [lastTemp, setLastTemp] = useState<number | null>(null); // Sparar föregående temp
  const [lastPoints, setLastPoints] = useState<number | null>(null); // Sparar poängförändring

  function newCity(): void {
    let newIndex;
    let currentIndex = cities.findIndex((c) => c.name === city.name);

    do {
      newIndex = Math.floor(Math.random() * cities.length);
    } while (newIndex === currentIndex); // Kör om tills ny stad

    setCity(cities[newIndex]);
  }

  async function getCurrentTemp(latitude: string, longitude: string) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`
    );
    const data = await response.json();
    const hour = new Date().getHours();
    return data.hourly.temperature_2m[hour];
  }

  function checkGuess() {
    if (temp === null || guess.trim() === "") return;

    const guessedTemp = parseFloat(guess);
    const difference = Math.abs(guessedTemp - temp);
    let points = 0;

    if (difference === 0) {
      points = 5; // Exakt rätt → 5 poäng
    } else if (difference <= 2) {
      points = 3; // Nära → 3 poäng
    } else if (difference <= 5) {
      points = 1; // Någorlunda nära → 1 poäng
    } else {
      points = -1; // Fel → -1 poäng
    }

    setScore(score + points);
    setLastPoints(points); // Spara senaste poängförändringen
    setLastTemp(temp); // Visa senaste temperaturen
    setGuess(""); // Rensa input
    newCity(); // Byt till ny stad
  }

  useEffect(() => {
    newCity(); // Väljer en slumpmässig stad vid sidstart
  }, []);

  useEffect(() => {
    getCurrentTemp(city.latitude, city.longitude).then(setTemp);
  }, [city]); // Uppdaterar temperaturen när city ändras

  return (
    <div>
      <header>
        <h1>Weather Game</h1>
        <Link to="/about">Cities</Link>
      </header>
      <main>
        <h3>City: {city.name}</h3>

        <input
          type="number"
          className="input"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            setLastTemp(null); // Rensa föregående temperatur när användaren börjar skriva
          }}
        />
        <button className="cityBtn" onClick={checkGuess}>
          Guess
        </button>

        {lastTemp !== null && <h3>Last temperature: {lastTemp}°C</h3>}

        {lastPoints !== null && (
          <h3>
            Points this round:{" "}
            <span style={{ color: lastPoints > 0 ? "green" : "red" }}>
              {lastPoints > 0 ? `+${lastPoints}` : lastPoints}
            </span>
          </h3>
        )}

        <h3>Total Score: {score}</h3>
      </main>
    </div>
  );
}
