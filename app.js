const apikey = "e3e260a39f06f4ea0c8697b21ba504db";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector("input");
const btn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

btn.addEventListener("click", () => {
  weather(searchBox.value);
});

async function weather(city) {
  const response = await fetch(`${apiurl}${city}&appid=${apikey}&units=metric`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(
      data.main.temp
    )} °C`;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    if (data.weather[0].main == "Haze" || data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/Haze.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/Mist.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/Cloud.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/Clear.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
