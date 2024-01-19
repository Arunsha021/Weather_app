const apikey="9d784fd23ee5ef4d840bd899c2aa5a4e"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

   const searchBox=document.querySelector(".search input");
   const searchbtn=document.querySelector(".search button");
   const weatherIcon=document.querySelector(".weather-icon");
   
 async function checkWeather(city){
    const response= await fetch (apiurl+ city+ `&appid=${apikey}`);
 
     if(response.status == 404){
      document.querySelector(".error").style.display= "block";
      document.querySelector(".weather").style.display="none";
     } 
      else{
           var data = await response.json();
      //  console.log(data);
    
       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C | °F" ;
   
       document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
   
       document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"
   
       if(data.weather[0].main=="Clouds"){
          weatherIcon.src="./Images/clouds.png";
       } 
        else if (data.weather[0].main=="clear"){
           weatherIcon.src="./Images/clear 2.png";
        }
        else if(data.weather[0].main=="Rain"){
           weatherIcon.src="./Images/rain 2.png";
        } 
        else if(data.weather[0].main=="drizzle"){
           weatherIcon.src="./Images/rain.png";
        } 
         else if(data.weather[0].main=="mist"){
           weatherIcon.src="./Images/clear.png";
        }
        document.querySelector(".weather").style.display="block";
      
      document.querySelector(".error").style.display="none";
      }
    }
     searchbtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);

    })

       

   
