var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addNewTask = document.getElementById("submit");
    addNewTask.onclick = main;
};
function main() {
    createTask();
}
function createTask() {
    var item = new ToDoItem();
    item.newTask = document.getElementById("newTask").value;
    var newListItem = document.createElement("LI");
    var innerText = document.createTextNode(item.newTask);
    var isDone = document.createElement("INPUT");
    isDone.setAttribute("type", "checkbox");
    newListItem.appendChild(isDone);
    newListItem.appendChild(innerText);
    document.getElementById("taskList").appendChild(newListItem);
}
