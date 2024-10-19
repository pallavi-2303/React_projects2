import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import Todoitems from "./components/Todoitems";
function App(){
  const todoItems=[{
    name:"Buy-milk",
    dueDate:"14/7/24",
  },
{
name:"go-to-college",
dueDate:"14/4/23",
},
{
  name:"go-to-shopping",
dueDate:"14/6/23",
},];
  return ( <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <Todoitems todoItems={todoItems}></Todoitems>
  </center>);
}
export default App;