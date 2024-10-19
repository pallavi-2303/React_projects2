import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import Todoitems from "./components/Todoitems";
import {useState} from "react";
import Welcomemessage from "./components/Welcomemessage";
function App(){
const [todoItems,setTodoItems]=useState([]);
const handlenewItem=(itemName,itemDueDate)=>{
  const newtodoItems=[...todoItems,{
    name:itemName,
    dueDate:itemDueDate,
  }];
  setTodoItems(newtodoItems);
}
const handleDeletebutton=(todoitemName)=>{
const newtodoItems=todoItems.filter(item=>item.name!==todoitemName);
setTodoItems(newtodoItems);
}
  return ( <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handlenewItem}/>
   {todoItems.length===0 &&  <Welcomemessage ></Welcomemessage>}
    <Todoitems todoItems={todoItems} onDeleteClick={handleDeletebutton}></Todoitems>
  </center>);
}
export default App;