class ToDoItem
{
    newTask: string;
    dueDate: string;
}

window.onload = function()
{
    //Add Task to To-Do List button
    let addNewTask = <HTMLElement> document.getElementById("submit")
    addNewTask.onclick = main
}

function main(): void
{
    if(isValid())
    {
        createTask()
    }

    // Moves from To Do to Done 
    let isComplete = document.querySelectorAll("input[type='checkbox']")
    for(let i = 0; i < isComplete.length; i++)
        {
            isComplete[i].onclick = completedTask
        }
}

function isValid(): boolean
{
    if(document.getElementById("newTask").value == "")
    { 
        document.getElementById("newTaskSpan").innerText = "Please add a new task"
        return false
    }
    return true
}

function createTask():void
{
    let item = new ToDoItem();
    item.newTask = document.getElementById("newTask").value;
    item.dueDate = document.getElementById("dueDate").value;
    let newListItem = document.createElement("LI");

    if(item.dueDate == "")
    { 
        let innerText = document.createTextNode(item.newTask + " No due date")
    }

    else
    {
        let innerText = document.createTextNode(item.newTask + " Complete by " + item.dueDate)
    }
    
    let isDone = document.createElement("INPUT");
    isDone.setAttribute("type", "checkbox");
    newListItem.appendChild(isDone);
    newListItem.appendChild(innerText);
    document.getElementById("taskList").appendChild(newListItem);
    
    // Resets text boxes to blank
    document.getElementById("newTaskSpan").innerText = ""
    document.getElementById("newTask").value = ""
    document.getElementById("dueDate").value = ""
}

function completedTask()
{
    alert("IT WORKED ")
}



