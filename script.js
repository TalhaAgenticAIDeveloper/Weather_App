const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");




// function
async function checkWeather() {

    let city = searchBox.value;


    const apikey = "25a2b23b70d48cb6f19b858c15a6f360";
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(apiURL);
    const data = await response.json();


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        // if (data.weather[0].main == "Clouds") {
        //     weathericon.src = "Images/images/clouds.png";
        // }
        // else if (data.weather[0].main == "Clear") {
        //     weathericon.src = "Images/images/clear.png";
        // }
        // else if (data.weather[0].main == "Rain") {
        //     weathericon.src = "Images/images/rain.png";
        // }
        // else if (data.weather[0].main == "Drizzle") {
        //     weathericon.src = "Images/images/drizzle.png";
        // }
        // else if (data.weather[0].main == "Mist") {
        //     weathericon.src = "Images/images/mist.png";
        // }

        

if (data.weather[0].main == "Clouds") {
    weathericon.src = "Images/images/clouds.png";
    card.style.background = "linear-gradient(135deg, #d7d2cc, #304352)"; // grayish clouds
}
else if (data.weather[0].main == "Clear") {
    weathericon.src = "Images/images/clear.png";
    card.style.background = "linear-gradient(135deg, #fceabb, #f8b500)"; // sunny clear
}
else if (data.weather[0].main == "Rain") {
    weathericon.src = "Images/images/rain.png";
    card.style.background = "linear-gradient(135deg, #4e54c8, #8f94fb)"; // rainy bluish
}
else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "Images/images/drizzle.png";
    card.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)"; // light drizzle
}
else if (data.weather[0].main == "Mist") {
    weathericon.src = "Images/images/mist.png";
    card.style.background = "linear-gradient(135deg, #606c88, #3f4c6b)"; // misty
}


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}



searchbtn.addEventListener("click", () => {

    checkWeather();

});




