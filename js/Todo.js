const toDoForm  = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList  = document.getElementById("todo-list");

const TODOLIST_KEY = "todolist";

let todoList = [];


// TodoList를 저장한다
function saveTodoList() {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList));
}

// Todo 개체를 삭제한다.
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    todoList = todoList.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodoList();
}

// Todo 데이터들을 가시적으로 표기해준다.
function paintTodoList(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// TodoList를 추가 해 준다.
function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    todoList.push(newTodoObj);
    paintTodoList(newTodoObj);
    saveTodoList();
}


toDoForm.addEventListener("submit", handleTodoSubmit);


// 저장된 기존 데이터가 있는지 체크 해 준다.
const savedData = localStorage.getItem(TODOLIST_KEY);

// 저장된 기존 데이터가 있을 경우 데이터를 가시적으로 리스트에 표기 해 준다.
if (savedData !== null) {
    const parsedTodoList = JSON.parse(savedData);
    todoList = parsedTodoList;

    parsedTodoList.forEach(paintTodoList);
}