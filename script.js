const apiKey = "1c6640d246a759f8b4bb3b78aa0a5016";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiMap = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";

const searchBox = document.querySelector(".search input"); // Target the input element
const searchBtn = document.querySelector(".search button"); // Target the button element
const weatherIcon = document.querySelector(".whether-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    const body = document.body; // Target the body element

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    console.log("Click");
    
  
});

const slider = document.querySelector('.slider');
        let slideIndex = 0;

        function showSlide(index) {
            const cards = slider.children;
            if (index < 0) {
                index = 0;
            } else if (index >= cards.length) {
                index = cards.length - 1;
            }

            const translateX = -index * 100;
            slider.style.transform = `translateX(${translateX}%)`;
            slideIndex = index;
        }

        function prevSlide() {
            showSlide(slideIndex - 1);
        }

        function nextSlide() {
            showSlide(slideIndex + 1);
        }

        var x = document.getElementById("demo");


        // function initMap() {
        //     // Create a map object and specify the DOM element for display.
        //     var map = new google.maps.Map(document.getElementById('map'), {
        //         center: { lat: -34.397, lng: 150.644 }, // Set the initial map center
        //         zoom: 8 // Set the initial zoom level
        //     });
        // }

        const apiKeyMap = 'AIzaSyAqqSC1RRWf3MCmKZ-4H-lnh9WwvjTsMjM';

  // Initialize the map
  function initMap() {
    const defaultLocation = { lat: 6.9271, lng: 79.8612 }; 
    const map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 8 
    });

    const geocoder = new google.maps.Geocoder();

    document.getElementById('').addEventListener('click', function() {
        const locationInput = document.getElementById('search').value;
        geocodeAddress(geocoder, map, locationInput);
    });
}

function geocodeAddress(geocoder, map, address) {
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            map.setCenter(location);
            const marker = new google.maps.Marker({
                map: map,
                position: location
            });

            // Display the city name as an info window on the marker
            const cityName = results[0].formatted_address;
            const infoWindow = new google.maps.InfoWindow({
                content: cityName
            });
            infoWindow.open(map, marker);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
        