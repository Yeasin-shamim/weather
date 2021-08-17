const apiKey = '20a5e254ae726daf74f2183de83a56c3';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => updateUI(data))
}
const dataFromInput = document.getElementById('btn');
dataFromInput.addEventListener('click', function(){
    const inputValue = document.getElementById('inputData').value;
    getWeatherData(inputValue);
})
const updateUI = data => {
    console.log(data);
    document.getElementById('city').innerHTML = data.name || "Invalid City";
    document.getElementById('temp').innerHTML = Math.round(data.main.temp -273);
    document.getElementsByClassName('lead').innerHTML = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png `);
}
getWeatherData("Dhaka")