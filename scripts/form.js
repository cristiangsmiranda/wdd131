document.addEventListener("DOMContentLoaded", function() {
    const visitsDisplay = document.querySelector(".visits");
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = "This is your first visit. 🥳🥳🥳 Welcome!";
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});

const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avgRating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', (event) => {
    populateProductOptions();
});

function populateProductOptions() {
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Choose a Product ...";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.hidden = true;

    productSelect.appendChild(placeholderOption);

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (!productSelect.value) {
        event.preventDefault();
        alert('Please select a product.');
    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;