const getTodaysWeather = async () => {
  try {
    const result = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&hourly=temperature_2m&forecast_days=1"
    );
    const data = await result.json();

    // Hämta tid- och temperaturdata från API-svaret
    const timeArray = data.hourly.time;
    const tempArray = data.hourly.temperature_2m;

    // Hämta aktuell timme
    const d = new Date();
    let hour = d.getHours();

    // Uppdatera DOM med dagens väder
    document.getElementById("h1").textContent = "Dagens väder";
    document.getElementById(
      "h2"
    ).textContent = `Kl. ${hour} är temperaturen ${tempArray[hour]}°C`;
  } catch (error) {
    console.error("Fel: ", error);
    document.getElementById("h1").textContent = "Något gick fel";
    document.getElementById("h2").textContent = "";
  }
};

getTodaysWeather();
