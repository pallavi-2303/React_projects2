
import AddTodoApp from "./components/AddTodoApp";
import AppName from "./components/AppName";
import ItemsTodoApp from "./components/ItemsTodoApp";
import "./App2.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App(){
 
const [TodoItems,setTodoItems]=useState([]);
const handleNewItem=(itemName,itemDueDate)=>{
  const newItems=[...TodoItems,{
    name:itemName,
    dueDate:itemDueDate
  },];
  setTodoItems(newItems);
}
const handleDeleteItem=(todoitemName)=>{
const newtodoItems=TodoItems.filter((item)=>item.name!=todoitemName);
setTodoItems(newtodoItems);
}
return <center className="todoapp-container">
  <AppName></AppName>
 <AddTodoApp onNewItem={handleNewItem}></AddTodoApp>
 {TodoItems.length===0 &&<WelcomeMessage></WelcomeMessage>}
 <ItemsTodoApp TodoItems={TodoItems} onDeleteClick={handleDeleteItem}></ItemsTodoApp>
</center>
}
export default App;