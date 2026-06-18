const apikey ="802822341bb861d45dde57d04e8f55b6"

let temperature=0;
let data;
async function getWeather() {
    const city = document.getElementById("city-select").value;


    if(city===""){
        alert("Please select a city");
    return;
    }
    
    console.log("city");

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(url);
     data = await response.json();

    if(data.cod == 404){
        throw new Error(data.message);
    }
    console.log(data);
    temperature=data.main.temp
    document.getElementById("weatherResult").innerHTML=`
    <h2>${data.name} </h2>
    <h3>Temperture ${temperature}</h3>
    <h3>Humidity ${data.main.humidity}</h3>
    <h3>Wind Speed ${data.wind.speed}</h3>
    `;
}

let tempUnit="C";

    function toggleUnit(){
        if(tempUnit =="C"){
            temperature=((temperature*9/5)+32).toFixed(1);
            tempUnit="F";
        }
        else if (tempUnit=="F"){
            temperature=((temperature-32)*5/9).toFixed(1);
            tempUnit="C";
        }

    document.getElementById("weatherResult").innerHTML=`
    <h2>${data.name} </h2>
    <h3>Temperture ${temperature}</h3>
    <h3>Humidity ${data.main.humidity}</h3>
    <h3>Wind Speed ${data.wind.speed}</h3>
    `;

}