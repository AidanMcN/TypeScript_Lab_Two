import {toDoInterface} from './todointerface';

class Todo implements toDoInterface{

    constructor(){}
    
    tasks:Array <string>=[];

    addTask(task:string):number {
        this.tasks.push(task);
        console.log("____________ New Task Added ___________");
        console.log("Task" + task+  " inserted in the array");
        return this.tasks.length;
    }

    listAllItems():void{
        console.log("Start: All items in array")
        this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("End: All items in array")
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("_____________Task Removed______________");
            console.log("Task " +task+ " Removed from list.");
        }
        return this.tasks.length;
    }
}

let myTodos = new Todo();
myTodos.addTask('Eat');
myTodos.addTask('Sleep');

myTodos.listAllItems();

myTodos.deleteTask('Sleep');


