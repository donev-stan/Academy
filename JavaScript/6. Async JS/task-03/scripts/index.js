import { renderView, renderSaved } from "./renderView.js";
import {
  getWeatherDataByCityName,
  getWeatherDataByCoordinates,
} from "./getWeatherData.js";

import elements from "./elements.js";
import savedTowns from "./savedTowns.js";

window.onload = () => {
  const savedTownsStorage = JSON.parse(localStorage.getItem("savedTowns"));
  if (savedTownsStorage) {
    savedTownsStorage.forEach((town) => savedTowns.push(town));
  }

  navigator.geolocation.getCurrentPosition((position) => {
    getWeatherDataByCoordinates(
      position.coords.latitude,
      position.coords.longitude
    ).then((data) => {
      renderView(data);
    });
  });

  elements.searchBtn().addEventListener("click", () => {
    const searchInput = document.getElementById("search-field");

    let searchValue = searchInput.value.trim();

    if (searchValue === "") searchValue = undefined;

    getWeatherDataByCityName(searchValue).then((data) => {
      renderView(data);
      searchInput.value = "";
    });
  });

  elements.saveIcon().addEventListener("click", () => {
    const current_town = elements.name().textContent;
    if (current_town === "City not found") return;

    if (savedTowns.includes(current_town)) {
      const indexOfCurrentTown = savedTowns.indexOf(current_town);
      savedTowns.splice(indexOfCurrentTown, 1);

      localStorage.setItem("savedTowns", JSON.stringify(savedTowns));

      renderSaved(current_town);
    } else {
      savedTowns.push(current_town);

      localStorage.setItem("savedTowns", JSON.stringify(savedTowns));
      renderSaved(current_town);
    }
  });
};
