async function WeatherData(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Butwal&appid=eb4fac068a3e5d31ce3eff2816592240&units=metric");
    const data = await response.json();
    const cname = document.getElementById("title")
    cname.innerHTML = "Butwal" // to initialise the city 
    //date 
    var ddate= document.getElementById("date")
    ddate.innerHTML = new Date().toJSON().slice(0, 10);
    //For time
    var time = new Date();
	var current_time = time.getHours()+":"+time.getMinutes();
	document.getElementById("time").innerHTML = current_time;
    //temperature
    const temp = document.getElementById("temperature");
    temp.innerHTML = data.main.temp+" &#8451";
    //weather condition
    const condition = document.getElementById("weather");
    condition.innerHTML = data.weather[0].description;
    //humidity
    const humidity=document.getElementById("Humidity");
    humidity.innerHTML="Humidity: "+ data.main.humidity+"%";
    //wind speed
    const wspeed=document.getElementById("Wind");
    wspeed.innerHTML="Wind : "+data.wind.speed+"m/s";
    //no rainfall data on the api
    // const rain=document.getElementById("Rainfall");
    // rain.innerHTML="Raindall: "+ data.main.precipitation;
    const {icon} = data.weather[0]; //icon
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    console.log(data)
}

const form=document.getElementById("form");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchfield=document.getElementById("search").value;
    console.log(searchfield)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchfield}&appid=eb4fac068a3e5d31ce3eff2816592240&units=metric`);
    const data = await response.json();
    const cname = document.getElementById("title")
    cname.innerHTML = data.name
    const temp = document.getElementById("temperature");
    temp.innerHTML =data.main.temp+" &#8451";
    const condition = document.getElementById("weather");
    condition.innerHTML = data.weather[0].description;
    const humidity=document.getElementById("Humidity");
    humidity.innerHTML="Humidity: "+ data.main.humidity+"%";
    const wspeed=document.getElementById("Wind");
    wspeed.innerHTML="Wind: " + data.wind.speed+"m/s";
    const {icon} = data.weather[0];
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    console.log(data)
})
WeatherData();
