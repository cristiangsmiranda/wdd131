const temples = [
    {
    templeName: "Salvador Brazil Temple",
    location: "Salvador, Bahia",
    dedicated: "2024, Octuber, 20",
    area: 31530,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-43493-main.jpg"
    },
    {
      templeName: "San Diego California Temple",
      location: "San Diego, California",
      dedicated: "1993, April, 25-30",
      area: 72000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6-24",
      area: 382207,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, US",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];


document.addEventListener("DOMContentLoaded", () => {
    renderTemples(temples); // Renderiza todos os templos ao carregar a página inicialmente
});

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        const filter = link.getAttribute("title").toLowerCase(); // Obtém o tipo de filtro baseado no título do link

        let filteredTemples = [];

        switch (filter) {
            case "home":
                filteredTemples = temples;
                break;
            case "old":
                filteredTemples = temples.filter(temple => {
                    return parseInt(temple.dedicated.split(',')[0]) < 1900;
                });
                break;
            case "new":
                filteredTemples = temples.filter(temple => {
                    return parseInt(temple.dedicated.split(',')[0]) > 2000;
                });
                break;
            case "large":
                filteredTemples = temples.filter(temple => {
                    return temple.area > 90000;
                });
                break;
            case "small":
                filteredTemples = temples.filter(temple => {
                    return temple.area < 10000;
                });
                break;
            default:
                filteredTemples = temples;
                break;
        }

        // Renderiza os templos filtrados
        renderTemples(filteredTemples);
    });
});

function renderTemples(temples) {
    const templeGrid = document.querySelector(".temple-grid");
    templeGrid.innerHTML = ''; // Limpa qualquer conteúdo existente na grade de templos

    temples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
        <div class="temple-info">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
        </div>
        <div class="temple-image">
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        </div>
        `;

        templeGrid.appendChild(templeCard);
    });
}

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        const firstLink = navigation.querySelector("a");
        if (firstLink) {
            firstLink.focus();
        }
    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;