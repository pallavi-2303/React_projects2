import styles from "./Display.module.css";
let Display=({displayValue})=>{
return  <input className={styles.input} type="text" value={displayValue}></input>
}
export default Display;