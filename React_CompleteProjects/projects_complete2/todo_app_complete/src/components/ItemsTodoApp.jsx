import ItemTodoApp from "./ItemTodoApp";
import styles from "./ItemsTodoApp.module.css";
let ItemsTodoApp=({TodoItems,onDeleteClick})=>{
  return (
<div className={styles.items_container}>
{TodoItems.map((item)=>(
 <ItemTodoApp key={item.name} todoName={item.name}todoDate={item.dueDate} onDeleteClick={onDeleteClick}></ItemTodoApp>
))} 
</div>
  )
}
export default ItemsTodoApp; 