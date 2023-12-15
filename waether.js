
// API key
const Apikey = "e8393a996cdd59c39296507db47a6155";
// API 
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchBox = document.querySelector(".search input");
 const searchbtn = document.querySelector(".search button");
 const weathericon = document.querySelector(".weather-icon");
// function fetch data in Api.
 async function  checkweather(city){

    const res = await fetch(ApiUrl + city + `&appid=${Apikey}`);
     var data = await res.json()
     console.log(data);
//Show data in page   
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ '°c';
     document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// cgeng Image weather type.  
     if(data.weather[0].main == "Clouds"){
        weathericon.src = "img/clouds.png"
     }
     else if(data.weather[0].main == 'Clear'){
        weathericon.src = "img/clear.png"

     }
     else if(data.weather[0].main == 'Rain'){
        weathericon.src = "img/rain.png"

     }
     else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = "img/Drizzle.png"

     }
     else if(data.weather[0].main =='Mist'){
        weathericon.src = "img/mist.png"

     }
}
// call function
searchbtn.addEventListener('click',()=>{
    console.log("click");
    checkweather(searchBox.value);
    console.log(searchBox.value);

})

