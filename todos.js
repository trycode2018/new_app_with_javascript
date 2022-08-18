var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
    'Fazer cafe',
    'Estudar javascript',
    'Jogar Futebol'
];

function renderTodos(){
listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        linkElement.setAttribute('href','#');

        var textLink = document.createTextNode("Excluir");

        linkElement.appendChild(textLink);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function addTodos(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodos;