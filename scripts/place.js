document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temperatureCelsius = 27;
const windSpeedKmh = 11;

function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Formula for wind chill in Celsius:
        // Wind Chill (°C) = 13.12 + 0.6215 * temperature - 11.37 * (windSpeed^0.16) + 0.3965 * temperature * (windSpeed^0.16)
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        
        return windChillCelsius.toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

// Function to display wind chill on page load
window.onload = function() {
    const weatherSection = document.querySelector('.weather ul');
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;
    weatherSection.appendChild(listItem);
};
