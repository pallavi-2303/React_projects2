import styles from './ButtonContainer.module.css';

const ButtonContainer=({onButtonClick})=>{
  const buttonsName=['C','1','2','+','4','-','5','6','*','7','8','/','=','9','0','.'];
return  <div className={styles.buttonContainer}> {buttonsName.map((buttonName)=>(
  <button onClick={()=>onButtonClick(buttonName)} className={styles.button}>{buttonName}</button>
))} 
</div>
}
export default ButtonContainer;