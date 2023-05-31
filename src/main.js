const searchBtn = document.getElementById("search");
let cityInput = document.getElementById("city");
const cityP = document.getElementById("cityP");
let cityWeather = document.getElementById("cityWeather");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  cityP.textContent = `The city that you search is: ${city}`;
  weatherApp(city);
});

function weatherApp(city) {
  const API = "2332d0b830d044deaaf144749232905";
  const link = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;

  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const weatherTemp = data.current.temp_c;
      cityWeather.innerHTML = `Current Temp in C: ${weatherTemp}`;
    })
    .catch((error) => alert("No matching location found."));
}
