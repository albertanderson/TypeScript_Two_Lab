var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item" + task + " has been added to the Array.");
    var count = myTaskArray.length;
    return count;
}
function listAllTasks() {
    // for(let i=0; i<myTaskArray.length;i++){
    //}
    console.log("list all items in the array");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("element " + task + " removed from array");
    }
    else {
        console.log("element " + task + " not in array");
    }
    var myArrayLength = myTaskArray.length;
    return myTaskArray.length;
}
addTask("Number three");
addTask("Number two");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("Number two");
console.log(x);
