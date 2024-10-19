import {  useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodoApp({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleAddButton = (event) => {
    const todoName=todoNameElement.current.value;
    const todoDate=todoDateElement.current.value;
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    onNewItem(todoName, todoDate);
  
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
          
            className="input"
            type="text"
            ref={todoNameElement}
            placeholder="enter todo here"
            
          ></input>
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            type="date"
          
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButton}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodoApp;
