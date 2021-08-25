let weather={
   apiKey: "960c2766e3d6059427c2f5a06f43c97b",
    fetchWeather: function(city){
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    +city
    +"&units=metric&appid="
    +this.apiKey
  )  
.then((response)=> response.json())
.then((data)=> this.displayWeather(data));
},
displayWeather: function(data){
const {name}= data;
const{icon, description}=data.weather[0];
const{temp, humidity, temp_min, temp_max}= data.main;
const{speed}=data.wind;
console.log(name, icon, description, temp, humidity, temp_min, temp_max, speed);
document.querySelector("#heading").textContent="Weather in "+ name;
document.querySelector("#icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png ";
document.querySelector("#description").textContent=description;
document.querySelector("#temperature").textContent= temp+"°C";
document.querySelector("#humidity").textContent="Humidity: "+ humidity+"%";
document.querySelector("#min").textContent="Minimum: "+ temp_min;
document.querySelector("#max").textContent="Maximim: "+ temp_max;
document.querySelector("#speed").textContent="Wind Speed: "+ speed+ "km/h";
}, 
searchWeather: function(){
   this.fetchWeather(document.querySelector("#search").value);
}
};
document.querySelector("#click").addEventListener("click", function(){
weather.searchWeather();
})

