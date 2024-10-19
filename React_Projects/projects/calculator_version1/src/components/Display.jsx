import styles from './Display.module.css';
const Display=({displayValue})=>{
return  <input className={styles.input}type="text" value={displayValue} readOnly></input>
   
}
export default Display;