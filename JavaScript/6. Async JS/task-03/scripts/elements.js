const elements = {
  searchBtn: () => document.getElementById("search-btn"),
  saveIcon: () => document.getElementById("isTownSaved"),
  name: () => document.getElementById("town-name"),
  temp: () => document.getElementById("result-curr-temp"),
  feels_like: () => document.getElementById("result-feelslike-temp"),
  min_temp: () => document.getElementById("result-min-temp"),
  max_temp: () => document.getElementById("result-max-temp"),
  humidity: () => document.getElementById("result-humidity"),

  weather_img: () => document.getElementById("weather-img"),
  weather_text: () => document.getElementById("result-weather-text"),
  weather_desc: () => document.getElementById("result-weather-desc"),
};

export default elements;
