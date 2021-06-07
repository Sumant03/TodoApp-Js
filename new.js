let addTodoButton=document.querySelector(".add-todo");
let inputText=document.querySelector(".todo-input")
let allTodo=document.querySelector(".todos-list-container")

// addTodoButton.addEventListener("click",function(){
//     addTodo()
// }
   
// );
// inputText.addEventListener("keypress",function(e){
//     if(e.key=="Enter"){
//         addTodo()
//     }
// });
// function addTodo(){

    
//         let todoinput=inputText.value;
//         if(todoinput){
//        appendTodo(todoinput);
//         inputText.value="";
//         }
// };
addTodoButton.addEventListener("click", addTodo);
    inputText.addEventListener("keypress",addTodo);

    function addTodo(e){
            let todoinput=inputText.value;
        
            if((e.key=="Enter")||e.type=="click"){
                if(todoinput){
            appendTodo(todoinput);
            inputText.value="";
                }
        }
    };
    function appendTodo(todo){
      let todoItemDiv=document.createElement("div");
      todoItemDiv.classList.add("todo-item");
      //created div
      let ptag=document.createElement("p");
      ptag.classList.add("todo-input");
      ptag.textContent=todo;

      let deleteButton=document.createElement("button");
      deleteButton.classList.add("delete-todo");
      deleteButton.textContent="Delete";

      deleteButton.addEventListener("click",deleteTodo);

      todoItemDiv.append(ptag);
      todoItemDiv.append(deleteButton);
      allTodo.append(todoItemDiv);
    //     <div class="todo-item">
    //     <p class="todo-input">Learn Css</p>
    //     <button class="delete-todo">Delete</button>
    // </div>

}
function deleteTodo(e){
    e.target.parentNode.remove();
    console.log(e);
}