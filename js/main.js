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
    if (isValid()) {
        createTask();
    }
    var isComplete = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < isComplete.length; i++) {
        isComplete[i].onclick = completedTask;
    }
}
function isValid() {
    if (document.getElementById("newTask").value == "") {
        document.getElementById("newTaskSpan").innerText = "Please add a new task";
        return false;
    }
    return true;
}
function createTask() {
    var item = new ToDoItem();
    item.newTask = document.getElementById("newTask").value;
    item.dueDate = document.getElementById("dueDate").value;
    var newListItem = document.createElement("LI");
    if (item.dueDate == "") {
        var innerText = document.createTextNode(item.newTask + " No due date");
    }
    else {
        var innerText = document.createTextNode(item.newTask + " Complete by " + item.dueDate);
    }
    var isDone = document.createElement("INPUT");
    isDone.setAttribute("type", "checkbox");
    newListItem.appendChild(isDone);
    newListItem.appendChild(innerText);
    document.getElementById("taskList").appendChild(newListItem);
    document.getElementById("newTaskSpan").innerText = "";
    document.getElementById("newTask").value = "";
    document.getElementById("dueDate").value = "";
}
function completedTask() {
    alert("IT WORKED ");
}
