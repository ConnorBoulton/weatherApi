let weather = {
    apiKey: "28d979dab7bee75e908648eab906633f",

    fetchWeatherByZip: function (zip) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${this.apiKey}`)
      .then(res => res.json())
      .then(data => this.weatherStats(data))
      .catch(err => {
          alert(err)
      })  
    },

    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(data => this.weatherStats(data))
        .catch(err => {
            alert(err)
        })
    },
    
    weatherStats: function (data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys

        document.querySelector(".city").innerHTML = `${name}, ${country}`;
        document.querySelector(".temp").innerHTML = `${Math.round(temp)} °F`;
        document.querySelector(".icon-img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerHTML = description
        document.querySelector(".max-temp").innerHTML = `Max: ${Math.round(temp_max)} °F`
        document.querySelector(".min-temp").innerHTML = `Min: ${Math.round(temp_min)} °F`
        document.querySelector(".speed").innerHTML = `Wind Speed: ${Math.round(speed)} mph`
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`
    },
    search: function (e) {    
        const parseNum = parseInt(e)
        if(isNaN(parseNum)){
            this.fetchWeather(e)
        } else {
            this.fetchWeatherByZip(e)
        }
    }
}

const searchInput = document.querySelector(".city-input")
const imgBtn = document.querySelector(".img-button")

imgBtn.addEventListener("click", () => {
    weather.search(searchInput.value)
    searchInput.value = ""
})

searchInput.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
    weather.search(searchInput.value)
    searchInput.value = ""
    }
})