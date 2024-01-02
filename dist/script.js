"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiKey = "790de26f1e9c46a0ae2101041240101";
const apiURL = "api.weatherapi.com/v1";
const city = document.getElementsByTagName("input");
city[0].addEventListener("change", () => {
    const url = `https://api.weatherapi.com/v1/current.json?q=${city[0].value}&key=${apiKey}`;
    function getapi(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            let data = yield response.json();
            show(data);
            console.log(data);
        });
    }
    getapi(url);
});
function show(data) {
    if (!data.current.is_day) {
        document.getElementsByTagName("body")[0].className = "dark-mode";
    }
    else {
        document.getElementsByTagName("body")[0].className = "";
    }
    const temperature = document.getElementById("temperature");
    if (temperature !== null)
        temperature.innerHTML = data.current.temp_c + "°C";
    const humidity = document.getElementById("humidity");
    if (humidity !== null)
        humidity.innerHTML = "Humidity " + data.current.humidity + "%";
    const wind = document.getElementById("wind");
    if (wind !== null)
        wind.innerHTML = "Wind " + data.current.wind_kph + "km/h";
    const weather = document.getElementById("weather");
    if (weather !== null)
        weather.innerHTML = data.current.condition.text;
}
//# sourceMappingURL=script.js.map