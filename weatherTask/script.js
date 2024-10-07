const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid=a03d01a479e9e324ee9ed73e56a0028b&units=metric&q=";
const SearchBox=document.querySelector(".search-box input");
const SearchBtn=document.querySelector(".search-box button");
const WeatherIcon = document .querySelector(".weather-icon");

async function checkWeather(cityName){
    const response=await fetch(apiUrl+cityName);
    var data = await response.json();

    document.querySelector(".weather").style.display="block";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds")
    {
        WeatherIcon.src="./images/Clouds.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        WeatherIcon.src="./images/rain.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        WeatherIcon.src="./images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        WeatherIcon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        WeatherIcon.src="./images/mist.png"
    }

}

SearchBtn.addEventListener("click",()=>{
    if(SearchBox.value==null||SearchBox.value.length<=1)
    {
        alert("Please put the city name !!")
    }
    else
    {
        checkWeather(SearchBox.value);
    }
})
