const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const elements = {
    form: document.getElementById('weather-form'),
    cityInput: document.getElementById('city'),
    cityName: document.getElementById('city-name'),
    temperature: document.getElementById('temperature'),
    description: document.getElementById('description'),
    humidity: document.getElementById('humidity'),
    errorMessage: document.getElementById('error-message')
};


async function getData(cityName)
{
    const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`)
    if (!response.ok)
    {
        throw new Error('City not found');
        
    }
    return await response.json();
}

function clearWeatherData() {
    elements.cityName.textContent = '';
    elements.temperature.textContent = '';
    elements.description.textContent = '';
    elements.humidity.textContent = '';
    elements.errorMessage.textContent = '';
}


elements.form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const cityName = elements.cityInput.value;

    if (!cityName) {
        elements.errorMessage.textContent = 'Please Enter a city';
        return;
    }

    clearWeatherData();

    try {

        const data = await getData(cityName);
        const city = data.name;
        const country = data.sys.country;
    elements.cityName.textContent = `${city},${country}`;
    elements.temperature.textContent = `Temperature: ${data.main.temp}°C`;
    elements.description.textContent = `Weather: ${data.weather[0].description}`;
    elements.humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error)
    {
elements.errorMessage.textContent = `Error: ${error.message}`;  
    }
    
});

