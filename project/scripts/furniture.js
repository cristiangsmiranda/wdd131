const furniture = [
    {
        Title: "kitchen cabinet",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/detalhe-da-parte-interior-para-casa-do-interior-da-cozinha-com-fornos_169016-20190.jpg?t=st=1721194312~exp=1721197912~hmac=48c8fa00a6c9e889ba47dd8bd4164c1b75eff48a370c99383310a364fac0f6e0&w=826"
    },
    {
        Title: "kitchen cabinet",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/vista-de-uma-cozinha-verde-lindamente-decorada_23-2150165534.jpg?t=st=1721194323~exp=1721197923~hmac=7bea5c223f13b21a0b22b9e0dfdfd950f0222d9fd9c09409fa4abb5435f5782d&w=826"
    },
    {
        Title: "refrigerator",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/cozinha-pequena-com-design-moderno_23-2150710537.jpg?t=st=1721194412~exp=1721198012~hmac=7673d7782e6e1d9067138166109acd0a4d9459ae5e5ae0d2c24a4b9af3432bf2&w=826"
    },
    {
        Title: "refrigerator",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/geladeira-retro-dentro-de-casa_23-2150711916.jpg?t=st=1721194455~exp=1721198055~hmac=775534356b3125a64e7ecb54bb6ebf757458e3fe61222af82a8314bb622a249a&w=360"
    },
    {
        Title: "washing machine",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/vista-da-sala-de-lavanderia-com-maquina-de-lavar-roupa-e-cores-retro_23-2151176239.jpg?t=st=1721194512~exp=1721198112~hmac=44da4429cb506d83e0b25f1ad2dfc1c8f4af6c8364fa1e46594dd74f0d379c86&w=996"
    },
    {
        Title: "juicer",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/close-up-de-um-refrigerante-futurista_23-2151281921.jpg?t=st=1721194642~exp=1721198242~hmac=443328c9888bd5531fa4c8e71f89953d55054d116684b28053616f3655da3a8a&w=360"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    renderFurniture(furniture);

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

function renderFurniture(furniture) {
    const furnitureGrid = document.querySelector(".furniture-grid");
    furnitureGrid.innerHTML = '';

    furniture.forEach(furniture => {
        const furnitureCard = document.createElement("div");
        furnitureCard.classList.add("furniture-card");

        furnitureCard.innerHTML = `
        <div class="furniture-info">
            <p>Title: ${furniture.Title}</p>
        </div>
        <div class="furniture-image">
            <img src="${furniture.imageUrl}" alt="${furniture.Title}" loading="lazy" width="400" height="250">
        </div>
        `;

        furnitureGrid.appendChild(furnitureCard);
    });
}
