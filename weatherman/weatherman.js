var weather = prompt("Welcome to the weatherman. I will light up your day and do wahtever the weather suggests. What's the weather now?");
weather = weather.toLowerCase();
if (weather == "sunny") {
	document.getElementById("animation").src="//giphy.com/embed/xT0Gqz4x4eLd5gDtaU";
} else if (weather == "rainy") {
	document.getElementById("animation").src="//giphy.com/embed/Of5eQwAXwTpE4";
} else if (weather == "windy") {
	document.getElementById("animation").src="giphy.com/embed/5RHAxkNRlLPjy";
} else if (weather == "cloudy") {
	document.getElementById("animation").src="//giphy.com/embed/y3xjJsIg3Mq3K";
} else if (weather == "snowy") {
	document.getElementById("animation").src="//giphy.com/embed/I2sBuEE64SuMo";
} else {
	document.getElementById("animation").src="//giphy.com/embed/OcbTkg1u5N2E";	
}