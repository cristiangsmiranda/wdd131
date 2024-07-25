const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav.navigation");

hamButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    hamButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        const firstLink = navigation.querySelector("a");
        if (firstLink) {
            firstLink.focus();
        }
    }
});

document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !hamButton.contains(event.target)) {
        if (navigation.classList.contains("open")) {
            navigation.classList.remove("open");
            hamButton.classList.remove("open");
            hamButton.setAttribute("aria-expanded", "false");
        }
    }
});


const changeContentButton = document.querySelector("#changeContentButton");
const gridSection = document.querySelector(".grid");

const originalContent = `
    <div class="grid-item">
        <h3>Visitor: A young professional decorating her new apartment.</h3>
        <p>Question: What modern wallpaper designs do you recommend for small living rooms and bedrooms?</p>
        <img src="images/modern-wallpaper.png" alt="modern wallpaper designs for small living rooms">
    </div>
    <div class="grid-item">
        <h3>Visitor: A parent looking to decorate their child's bedroom.</h3>
        <p>Question: "Do you have dinosaur or outer space stickers, and how can I create a fun environment for my child?"</p>
        <img src="images/dinosaur-wallpaper.png" alt="children's room with dinosaur wallpaper">
    </div>
`;

const newContent = `
    <div class="grid-item">
        <h3>Visitor: A college student moving into a new dorm room.</h3>
        <p>Question: What are the best wallpaper designs for a small dorm room with limited space?</p>
        <img src="images/best_wallpaper.jpg" alt="dorm room wallpaper designs">
    </div>
    <div class="grid-item">
        <h3>Visitor: A grandparent decorating a nursery for a new grandchild.</h3>
        <p>Question: "Do you have any soft and colorful stickers for a nursery, and what are the best themes for a baby's room?"</p>
        <img src="images/baby_room.jpg" alt="nursery room with colorful stickers">
    </div>
`;

let isOriginal = true;
gridSection.innerHTML = originalContent;

if (changeContentButton && gridSection) {
    changeContentButton.addEventListener("click", () => {
        if (isOriginal) {
            gridSection.innerHTML = newContent;
        } else {
            gridSection.innerHTML = originalContent;
        }
        isOriginal = !isOriginal;
    });
}
