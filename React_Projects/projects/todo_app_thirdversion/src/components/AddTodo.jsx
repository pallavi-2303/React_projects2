import {useState} from "react";
function AddTodo({onNewItem}){
const [todoName,setTodoName]=useState();
const [todoDate,setDueDate]=useState();
const handleNameChange=(event)=>{
  setTodoName(event.target.value);
}
const handleDateChange=(event)=>{
  setDueDate(event.target.value);
}
const handleAddButtonclick=()=>{
  onNewItem(todoName,todoDate);
  setTodoName("");
  setDueDate("");
}
return <div className="container ">
   <div className="row kg-row">
    <div className="col-6">
      <input onChange={handleNameChange} type="text" placeholder="ENTER TODO HERE" value={todoName}></input>
    </div>
    <div className="col-4">
      <input onChange={handleDateChange} type="date" value={todoDate}></input>
    </div>
    <div className="col-2">
<button onClick={handleAddButtonclick} type="button" className="btn btn-success kg-button">Add</button>
</div>
  </div>
</div>
}
export default AddTodo;