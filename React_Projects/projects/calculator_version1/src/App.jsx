import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
 import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';


function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
setCalVal("");
    }
    else if(buttonText==='='){
const result=eval(calVal);
setCalVal(result);
    }
    else{
    const newDisplayvalue=calVal+buttonText;
      setCalVal(newDisplayvalue);
    }
  };
  return <div className={styles.container}> 
  <Display displayValue={calVal}></Display>
  <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  </div>
  
  
}

export default App
