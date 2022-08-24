import renderView from "./renderView.js";
import {
  getWeatherDataByCityName,
  getWeatherDataByCoordinates,
} from "./getWeatherData.js";

(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    getWeatherDataByCoordinates(
      position.coords.latitude,
      position.coords.longitude
    ).then((data) => {
      console.log(data);
      renderView(data);
    });
  });

  document.getElementById("search-btn").addEventListener("click", () => {
    const searchInput = document.getElementById("search-field");

    let searchValue = searchInput.value.trim();

    if (searchValue === "") searchValue = undefined;

    getWeatherDataByCityName(searchValue).then((data) => {
      renderView(data);
      searchInput.value = "";
    });
  });
})();
