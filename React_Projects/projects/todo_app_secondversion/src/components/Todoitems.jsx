import Todoitem from "./Todoitem";
import styles from './Todoitems.module.css';
const Todoitems=({todoItems})=>{

  return(<div className={styles.itemsContainer}>
    {todoItems.map((item)=>(
  <Todoitem todoName={item.name} todoDate={item.dueDate}></Todoitem>
  ))}
</div>
  ); 
};
export default Todoitems;