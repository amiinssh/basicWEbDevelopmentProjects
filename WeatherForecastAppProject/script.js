const weather = {
    apikey: "dee94f7f8f08659811dc68a330b3a2d4",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city +
            "&units=metric&lang=en&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.dataweather(data));
    },
    dataweather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function() {
        const city = document.querySelector(".search-eng").value;
        this.fetchWeather(city);
    }
}

document.querySelector(".search-btn").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-eng").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Istanbul");
