import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Todoitem from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";

function App(){
  return <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <div className="items-container ">
    <Todoitem/>
    <Todoitem2/>
</div>
  </center>
}
export default App;