// Populate the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Static values matching the weather section content
const temperatureCelsius = 27; // Static temperature in Celsius
const windSpeedKmh = 11; // Static wind speed in km/h

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for viable wind chill calculation
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Calculate wind chill based on the formula for Celsius (you can adapt for Fahrenheit if needed)
        // Formula for wind chill in Celsius:
        // Wind Chill (°C) = 13.12 + 0.6215 * temperature - 11.37 * (windSpeed^0.16) + 0.3965 * temperature * (windSpeed^0.16)
        const windChillCelsius = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        
        // Return the calculated wind chill
        return windChillCelsius.toFixed(1) + " °C"; // Adjust format as needed
    } else {
        // Conditions not met, return "N/A"
        return "N/A";
    }
}

// Function to display wind chill on page load
window.onload = function() {
    // Select the weather section where wind chill will be displayed
    const weatherSection = document.querySelector('.weather ul');
    
    // Calculate wind chill
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
    
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the inner HTML of the list item with wind chill information
    listItem.innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;
    
    // Append the list item to the weather section
    weatherSection.appendChild(listItem);
};
