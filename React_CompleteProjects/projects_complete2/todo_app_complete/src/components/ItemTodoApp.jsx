import { AiFillDelete } from "react-icons/ai";

function ItemTodoApp({todoName ,todoDate,onDeleteClick}){
return <div className="conatiner">
   <div className="row kg-row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button onClick={()=>onDeleteClick(todoName)}type="button" className="btn btn-danger kg-button"><AiFillDelete/>



    </button>
    </div>
  </div>
</div>
}
export default ItemTodoApp;