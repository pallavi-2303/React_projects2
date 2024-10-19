import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
 import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';

function App() {
  return <div className={styles.container}> 
  <Display></Display>
  <ButtonContainer></ButtonContainer>
  </div>
  
  
}

export default App
