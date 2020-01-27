import{taskInterface}from './interface';

class MyTaskManager implements taskInterface{
   
    myTaskArray: Array<string>=[];

    constructor(){ }
    addTask(task:string):number{
        this.myTaskArray.push(task);
        console.log("Item" +task+" has been added to the Array.")
        let count: number = this.myTaskArray.length;
        return count;
}

listAllTasks():void {
 console.log("list all items in the array")
 myTaskArray.forEach(function(task) {
     console.log(task);
 });

}
deleteTask(task:string): number{
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
 
 }

let myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.listAllTasks();