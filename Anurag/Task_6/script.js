// API key for OpenWeatherMap   --> api key  
const apiKey = "4c9b694e3f127daf35067c77372825bb";  

// Function to fetch weather data based on user input
async function getWeather() {
    // Get the city name entered by the user and remove extra spaces
    const city = document.getElementById("city").value.trim();
    
    // Check if the input field is empty
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    // Construct the API request URL with the city name, API key, and metric units
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful, otherwise throw an error
        if (!response.ok) {
            throw new Error("City not found! Check spelling or try another city.");
        }

        // Convert the response to JSON format
        const data = await response.json();

        // Call the function to display weather details
        displayWeather(data);
    } catch (error) {
        // Display an error message if something goes wrong
        document.getElementById("weather-result").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

// Function to display weather information on the webpage
function displayWeather(data) {
    document.getElementById("weather-result").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>  <!-- Display city name and country -->
        <p>Temperature: ${data.main.temp}°C</p>  <!-- Show temperature in Celsius -->
        <p>Weather: ${data.weather[0].description}</p>  <!-- Show weather condition description -->
    `;
}
