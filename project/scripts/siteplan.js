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