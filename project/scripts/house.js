const house = [
    {
        location: "double bedroom",
        imageUrl:
      "https://img.freepik.com/fotos-gratis/arranjo-de-quartos-pequenos-e-juvenis_23-2151113835.jpg?t=st=1721182424~exp=1721186024~hmac=7e8a3d65266e9277a4c0c9dda77175af3ee892d10f5eab66df9a9fbccf23fc10&w=740"
    },
    {
        location: "children's room",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/bercario-moderno-e-aconchegante-com-decoracao-fofa-de-pelucia-gerada-por-ia_188544-29066.jpg?t=st=1721182554~exp=1721186154~hmac=5a000deff1bff421087a41300f28871a25ec7f8ae63301b5189040b27603f916&w=996"
    },
    {
        location: "living room",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/entrada-com-estilo-moderno_23-2150695917.jpg?t=st=1721184406~exp=1721188006~hmac=b6a79aab9bf382a9555bc742c8e26af5c4e2d0e7dda1ee97e3bd1db3f6d7dd1a&w=826"
    },
    {
        location: "living room",
        imageUrl:
      "https://img.freepik.com/fotos-gratis/papel-de-parede-de-pintura-abstrata-ou-conceito-de-fundo_1194-588437.jpg?t=st=1721184440~exp=1721188040~hmac=c9fe9adb462f6b2ba600afae608154333b879587e41058dab06a29889fe0d6e3&w=740"
    },
    {
        location: "Bathroom",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/superficie-fotorrealista-de-parede-de-pedra-usada-no-design-de-interiores_23-2151214794.jpg?t=st=1721184487~exp=1721188087~hmac=16c119d74eed6e53d211e460db209e547acf14270492493c022038232d78dbaa&w=360"
    },
    {
        location: "Bathroom",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/banheiro-pequeno-de-estilo-moderno-com-moveis_23-2150836717.jpg?t=st=1721184516~exp=1721188116~hmac=15aaa8d20f159e85e4cf138344613ccfb1d32c47a52665e926cb95e894f02f3e&w=740"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    renderHouses(house);

    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav.navigation");

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
});

function renderHouses(house) {
    const houseGrid = document.querySelector(".house-grid");
    houseGrid.innerHTML = '';

    house.forEach(house => {
        const houseCard = document.createElement("div");
        houseCard.classList.add("house-card");

        houseCard.innerHTML = `
        <div class="house-info">
            <p>Location: ${house.location}</p>
        </div>
        <div class="house-image">
            <img src="${house.imageUrl}" alt="${house.location}" loading="lazy" width="400" height="250">
        </div>
        `;

        houseGrid.appendChild(houseCard);
    });
}
