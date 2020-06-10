var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addNewTask = document.getElementById("submit");
    addNewTask.onclick = main;
    document.onkeypress = stopRKey;
};
function main() {
    if (isValid()) {
        createTask();
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
    newListItem.setAttribute("id", "notCompletedItem");
    if (item.dueDate == "") {
        var innerText = document.createTextNode(item.newTask + " - No due date");
    }
    else {
        var innerText = document.createTextNode(item.newTask + " - Complete by " + item.dueDate);
    }
    var isDone = document.createElement("INPUT");
    isDone.setAttribute("type", "checkbox");
    isDone.setAttribute("id", "notCompletedItemBox");
    isDone.setAttribute("title", "Complete To-Do");
    newListItem.appendChild(isDone);
    newListItem.appendChild(innerText);
    document.getElementById("taskList").appendChild(newListItem);
    document.getElementById("newTaskSpan").innerText = "";
    document.getElementById("newTask").value = "";
    document.getElementById("dueDate").value = "";
    isDone.onclick = completedTask;
}
function completedTask() {
    var item = new ToDoItem();
    item.newTask = this.parentElement.innerText.split('-')[0] + ": Completed!";
    var newListItem = document.createElement("LI");
    var innerText = document.createTextNode(item.newTask);
    newListItem.appendChild(innerText);
    document.getElementById("compTaskList").appendChild(newListItem);
    var removedItem = this.parentNode;
    removedItem.parentNode.removeChild(removedItem);
    goodJob();
}
function goodJob() {
    if (document.getElementById('taskList').getElementsByTagName('li').length == 0) {
        var audio = new Audio('/audio/TaDa.mp3');
        audio.volume = 0.2;
        audio.play();
        confetti.start(2500);
    }
}
function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) {
        return false;
    }
}
