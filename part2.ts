let myTaskArray:Array<String> = [];

function addTask(task:String):number{
    myTaskArray.push(task);
    console.log("Item" +task+" has been added to the Array.")
    let count:number = myTaskArray.length;
    return count;

}
function listAllTasks():void {
   // for(let i=0; i<myTaskArray.length;i++){
//}
console.log("list all items in the array")
myTaskArray.forEach(function(task) {
    console.log(task);
});

}
function deleteTask(task:String):number{
    let index:number =myTaskArray.indexOf(task);
    if(index > -1){
    myTaskArray.splice(index,1);
    console.log("element "+ task + " removed from array")
}else{
    console.log("element "+ task + " not in array")
}
    let myArrayLength = myTaskArray.length;
    return myTaskArray.length;
}
addTask("Number three");
addTask("Number two");
let elementCount: number = addTask("Number One");
console.log(elementCount);

listAllTasks();
let x:number = deleteTask("Number two");
console.log(x);