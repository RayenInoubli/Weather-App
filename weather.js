let weather = {
    apikey : "ae33a637bc9970f3c0528fa73a6b738d",

    fetchWeather : function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather : function (data) {
        const{ temp , humidity } = data.main;
        const{ speed } = data.wind;
        const{ description } = data.weather[0];
        const{ name } = data;
        console.log(temp, humidity, speed, description, name);

        document.querySelector("#city_name").innerHTML = "Weather in " + name ;
        document.querySelector("#temp").innerHTML = Math.round(temp) + "°C";
        document.querySelector("#wind_speed").innerHTML = "Wind Speed:" + speed + "Km/h";
        document.querySelector("#humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector("#state").innerHTML = description;
    },
    search : function () {
        this.fetchWeather(document.querySelector("#search_bar").value);
    }
};

document.querySelector("#search_button").addEventListener("click", function () {weather.search();});
