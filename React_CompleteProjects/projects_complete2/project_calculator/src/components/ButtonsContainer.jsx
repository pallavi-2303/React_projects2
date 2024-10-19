import styles from "./ButtonsContainer.module.css";
let ButtonsContainer=({buttonNames,onButtonClick})=>{
  return (<div className={styles.button_container}>
    {buttonNames.map((value)=>(
 <button className={styles.button} onClick={()=>onButtonClick(value)}>{value}</button>
))}
</div>)
}
export default ButtonsContainer;