const apiKey = "790de26f1e9c46a0ae2101041240101";
const apiURL = "api.weatherapi.com/v1";

const city = document.getElementsByTagName("input");
city[0].addEventListener("change", () => {
  const url = `https://api.weatherapi.com/v1/current.json?q=${city[0].value}&key=${apiKey}`;

  async function getapi(url: string) {
    const response = await fetch(url);
    let data = await response.json();
    show(data);
    console.log(data);
  }

  getapi(url);
});

function show(data: any) {
  if (!data.current.is_day) {
    document.getElementsByTagName("body")[0].className = "dark-mode";
  } else {
    document.getElementsByTagName("body")[0].className = "";
  }

  const temperature = document.getElementById("temperature");
  if (temperature !== null) temperature.innerHTML = data.current.temp_c + "°C";

  const humidity = document.getElementById("humidity");
  if (humidity !== null)
    humidity.innerHTML = "Humidity " + data.current.humidity + "%";

  const wind = document.getElementById("wind");
  if (wind !== null) wind.innerHTML = "Wind " + data.current.wind_kph + "km/h";

  const weather = document.getElementById("weather");
  if (weather !== null) weather.innerHTML = data.current.condition.text;
}
