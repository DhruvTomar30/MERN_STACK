let Todo=[];

let req =prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting App");
        // break;
    }

    if(req=="list"){
        console.log("--------------");
        for(let i=0; i<Todo.length; i++){
            console.log(i, Todo[i]);
        }
        console.log("--------------");
    }else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        Todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx= prompt("please enter the task index");
        Todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("please enter your request");

}
