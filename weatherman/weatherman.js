var weather = prompt("Welcome to the weatherman. I will light up your day and do wahtever the weather suggests. What's the weather now?");
weather = weather.toLowerCase();
if (weather == "sunny") {
	document.getElementById("animation").src="//giphy.com/embed/xT0Gqz4x4eLd5gDtaU" width="480" height="347" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>"";
} else if (weather == "rainy") {
	document.getElementById("animation").src="//giphy.com/embed/Of5eQwAXwTpE4" width="480" height="379" frameBorder="0" class="giphy-embed" allowFullScreen>";
} else if (weather == "windy") {
	document.getElementById("animation").src="//giphy.com/embed/5RHAxkNRlLPjy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen>";
} else if (weather == "cloudy") {
	document.getElementById("animation").src="";
} else if (weather == "snowy") {
	document.getElementById("animation").src="";
} else {
	document.getElementById("animation").src="";	
}