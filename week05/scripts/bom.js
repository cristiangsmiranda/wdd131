let chaptersArray = getChapterList() || [];

function getChapterList() {
    const storedChapters = localStorage.getItem("myFavBOMList");
    return storedChapters ? JSON.parse(storedChapters) : [];
}

chaptersArray.forEach(chapter =>{
    displayList(chapter);
});

function displayList(item){
    const List = document.querySelector ("#list");

    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = '❌';

    deleteButton.classList.add("delete");

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

const input = document.querySelector('#favchap');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});
  
console.log(chaptersArray);
