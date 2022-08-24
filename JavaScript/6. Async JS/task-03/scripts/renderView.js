import elements from "./elements.js";
import { getWeatherDataByCityName } from "./getWeatherData.js";
import savedTowns from "./savedTowns.js";

const setLoadingView = (message) => {
  const loadingImg = `<img src="./images/loader.png" class="loader-img">`;

  const errorMsgWithUpperCase =
    message.split(".")[0].charAt(0).toUpperCase() +
    message.split(".")[0].slice(1);

  elements.name().innerText = errorMsgWithUpperCase;
  elements.temp().innerHTML = loadingImg;
  elements.feels_like().innerHTML = loadingImg;
  elements.min_temp().innerHTML = loadingImg;
  elements.max_temp().innerHTML = loadingImg;
  elements.humidity().innerHTML = loadingImg;

  elements.weather_img().src = chooseWeatherImage("");
  elements.weather_text().innerHTML = "";
  elements.weather_desc().innerHTML = "";
};

const renderSaved = (town_name) => {
  elements.saveIcon().src = savedTowns.includes(town_name)
    ? `./images/saved.png`
    : `./images/save.png`;

  const saved_div = document.querySelector(".saved");
  saved_div.innerHTML = "";

  savedTowns.forEach((town) => {
    const town_h3 = document.createElement("h3");
    town_h3.innerText = `${town}`;
    town_h3.addEventListener("click", () => {
      getWeatherDataByCityName(town).then((data) => renderView(data));
    });

    saved_div.appendChild(town_h3);
  });
};

const renderView = (data) => {
  if (data.cod !== 200) return setLoadingView(data.message);

  const town_name = data?.name;
  const { temp, feels_like, temp_min, temp_max, humidity } = data?.main;
  const { main: weather_text, description } = data?.weather[0];

  renderSaved(town_name);
  elements.name().innerText = town_name;
  elements.temp().innerText = `${String(temp).slice(0, 2)} ℃`;
  elements.feels_like().innerText = `${String(feels_like).slice(0, 2)} ℃`;
  elements.min_temp().innerText = `${String(temp_min).slice(0, 2)} ℃`;
  elements.max_temp().innerText = `${String(temp_max).slice(0, 2)} ℃`;
  elements.humidity().innerText = `${humidity} %`;

  elements.weather_img().src = chooseWeatherImage(weather_text);
  elements.weather_text().innerText = weather_text;
  elements.weather_desc().innerText = description;
};

const chooseWeatherImage = (text) => {
  switch (text) {
    case "Clouds":
      return "./images/cloudy (1).png";

    case "Clear":
      return "./images/clear-sky.png";

    case "Rain":
      return "./images/rainy.png";

    case "Thunderstorm":
      return "./images/thunderstorm.png";

    default:
      return "./images/default.png";
  }
};

export { renderView, renderSaved };
