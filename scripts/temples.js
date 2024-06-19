// Populate the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    // Ajusta o foco para o primeiro link ao abrir o menu
    if (navigation.classList.contains('open')) {
        const firstLink = navigation.querySelector('a');
        if (firstLink) {
            firstLink.focus();
        }
    }
});
