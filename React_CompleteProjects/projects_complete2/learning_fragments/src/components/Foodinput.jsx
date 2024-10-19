import styles from "./Foodinput.module.css";
let Foodinput=({handleKeyDown})=>{
 
  return <input className={styles.input} type="text" placeholder="Enter your favourite food" onKeyDown={handleKeyDown}></input>
}
export default Foodinput;