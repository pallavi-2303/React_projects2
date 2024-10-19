import styles from "./FoodInput.module.css"
const FoodInput=({handleKeyDown})=>{
  return <input className={styles.input} placeholder="Enter any Healthy Food Items"
  onKeyDown={handleKeyDown}></input>
}
export default FoodInput;