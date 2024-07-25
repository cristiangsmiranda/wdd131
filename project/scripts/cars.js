const cars = [
    {
        Title: "car wrapping",
        imageUrl:
        "images/car_gray.jpg"},
    {
        Title: "car wrapping",
        imageUrl:
        "images/car_red_and_gray.jpg"},
        {
        Title: "car wrapping",
        imageUrl:
        "images/car_red.jpg"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/salao-de-servico-automatico-doign-embrulho-de-carro_23-2149593831.jpg?t=st=1721191604~exp=1721195204~hmac=7b0fdb0637262ec02a065f4d1fdee531dc81e6f3bf6ef45428d500714ee1870b&w=360"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/carro-amarelo-preto-e-roda-de-auto-ajuste_114579-4036.jpg?t=st=1721191694~exp=1721195294~hmac=e707f2757a50368ffda9fd7e0311abb6f155cd1959ad9f05575864d91b72427e&w=360"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/luzes-dianteiras-do-xenon-de-um-carro-preto-amarelo-vista-do-topo_114579-5061.jpg?t=st=1721191637~exp=1721195237~hmac=f4d1a1287dfc5a0f1fb9f86328f8bd9185a773118a4a8087ab6056ef07bad6cd&w=360"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/pessoa-trabalhando-no-envelopamento-de-carros_23-2149342664.jpg?t=st=1721191869~exp=1721195469~hmac=7634c406e60e702f2fe500415a5ef0843540be346c4f575198f75869cd3c0f65&w=826"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/salao-de-servico-automatico-doign-embrulho-de-carro_23-2149593881.jpg?t=st=1721191796~exp=1721195396~hmac=d420067dcd98819734ccfb2aa1e59818152cf989b7f19064681f250ff2f66b54&w=826"},
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/envelopamento-de-carro-com-papel-aluminio-no-servico-de-carro_1303-32341.jpg?t=st=1721192260~exp=1721195860~hmac=dbbb6d16433117c3ccc8242cce651389fee385da6595c905ac56833e4ef68757&w=740"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    renderCars(cars);

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

function renderCars(cars) {
    const carsGrid = document.querySelector(".cars-grid");
    carsGrid.innerHTML = '';

    cars.forEach(cars => {
        const carsCard = document.createElement("div");
        carsCard.classList.add("cars-card");

        carsCard.innerHTML = `
        <div class="cars-info">
            <p>Title: ${cars.Title}</p>
        </div>
        <div class="cars-image">
            <img src="${cars.imageUrl}" alt="${cars.Title}" loading="lazy" width="400" height="250">
        </div>
        `;

        carsGrid.appendChild(carsCard);
    });
}
