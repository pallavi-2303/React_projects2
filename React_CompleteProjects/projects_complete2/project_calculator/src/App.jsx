import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
function App(){
  const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  const [calVal,setCalVal]=useState("45");
  const onButtonClick=(buttonText)=>{
if(buttonText==='C'){
setCalVal("");
}
else if(buttonText==='='){
const result=eval(calVal);
setCalVal(result);
}
else{
  const newDisplay=calVal+buttonText;
  setCalVal(newDisplay);
}
  }
  return <div className={styles.calculator}>
   <Display displayValue={calVal}></Display>
    <ButtonsContainer buttonNames={buttonNames} onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
}
export default App;