async function WeatherData(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=984ee70f82834c369dc12345233103&q=Butwal");
    const data = await response.json();
    const cname = document.getElementById("title")
    cname.innerHTML = data.location.name
    const condition = document.getElementById("weather");
    condition.innerHTML = data.current.condition.text
    const temp = document.getElementById("temperature");
    temp.innerHTML = "Temperature: "+ data.current.feelslike_c +" &#8451";
    console.log(data)

}
const form=document.getElementById("form");
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchfield=document.getElementById("search").value;
    console.log(searchfield)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=984ee70f82834c369dc12345233103&q=${searchfield}`);
    const data = await response.json();
    const cname = document.getElementById("title")
    cname.innerHTML = data.location.name
    const condition = document.getElementById("weather");
    condition.innerHTML = data.current.condition.text
    const temp = document.getElementById("temperature");
    temp.innerHTML = "Temperature: "+ data.current.feelslike_c +" &#8451";
    console.log(data)
})
WeatherData();