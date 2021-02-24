let tasks: string[] = [];

function addTask(task:string):number {
    tasks.push(task);
    console.log("____________ New Task Added ___________");
    console.log("Task" + task+  " inserted in the array");
    return task.length;
}

function listAllTasks():void{
    console.log("Start: All items in array")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("End: All items in array")
}

function deleteTask(task:string):number{
    let index:number = task.indexOf(task);
    if(index > -1){
        tasks.splice(index,1);
        console.log("_____________Task Removed______________");
        console.log("Task " +task+ " Removed from list.");
    }
    return task.length;
}

addTask('Wake up');
addTask('Sleep');

listAllTasks();

deleteTask('Sleep');



