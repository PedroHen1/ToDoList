let addToDoButton = document.getElementById("add")
let toDoList = document.getElementById("toDoContainer")
let text = document.getElementById("text")

addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p')
    if (text.value == "") {
        return paragraph
    }
    paragraph.classList.add('toDoContainer');
    paragraph.innerText = text.value;
    toDoList.appendChild(paragraph);
    text.value = "";
    let span = document.createElement('span')
    span.classList.add('toDoContainer')
    toDoList.appendChild(span);
    span.innerHTML= '<button id="spnBtn">X</button>'
    paragraph.addEventListener('click', function () {
        paragraph.style.color= '#00994d'
    })
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration= 'line-through';
    })

    span.addEventListener('click', function () {
        toDoList.removeChild(paragraph);
        toDoList.removeChild(span);
    })
})