class ToDoItem
{
    newTask: string;
    dueDate: Date;
}



window.onload = function()
{
    //Add Task to To-Do List button
    let addNewTask = <HTMLElement> document.getElementById("submit")
    addNewTask.onclick = main
}

function main(): void
{
    createTask()
}

function createTask():void
{
    let item = new ToDoItem()
    item.newTask = document.getElementById("newTask").value
    //item.dueDate = document.getElementById("dueDate").innerText
    let newListItem = document.createElement("LI")
    let innerText = document.createTextNode(item.newTask);
    let isDone = document.createElement("INPUT")
    isDone.setAttribute("type","checkbox")
    newListItem.appendChild(isDone)
    newListItem.appendChild(innerText);
    document.getElementById("taskList").appendChild(newListItem);
}



