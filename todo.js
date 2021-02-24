"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("____________ New Task Added ___________");
        console.log("Task" + task + " inserted in the array");
        return this.tasks.length;
    };
    Todo.prototype.listAllItems = function () {
        console.log("Start: All items in array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End: All items in array");
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("_____________Task Removed______________");
            console.log("Task " + task + " Removed from list.");
        }
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask('Eat');
myTodos.addTask('Sleep');
myTodos.listAllItems();
myTodos.deleteTask('Sleep');
