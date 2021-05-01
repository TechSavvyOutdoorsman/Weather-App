
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Bozeman&units=imperial&appid=3bbf15fda686f13d54e7974f25d16802", function(data){
console.log(data);



var icon ="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";


var weather = data.weather[0].main;
var temp = Math.floor(data.main.temp);
var highTemp = Math.floor(data.main.temp_max);
var lowTemp = Math.floor(data.main.temp_min);
var feelsLike = Math.floor(data.main.feels_like);
var description = data.weather[0].description;



$('.icon').attr('src', icon);
$('.weather').append(weather);
$('.temp').append(temp);
$('.high-temp').append(highTemp);
$('.low-temp').append(lowTemp);
$('.feels-like').append(feelsLike);
$('.description').append(description);

}

);