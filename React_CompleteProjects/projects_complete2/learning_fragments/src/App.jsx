import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
function App(){
  
  let [foodItems,setfoodItems]=useState([
  ]);
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newFoodItem=event.target.value;
      event.target.value="";
      let newItems=[...foodItems,newFoodItem];
      setfoodItems(newItems);
     
    }
  }

  return(<div> <Container>
    <h1>Healthy Food</h1>
    <Foodinput handleKeyDown={onKeyDown}></Foodinput>
   <ErrorMessage foodItems={foodItems}></ErrorMessage>
    <FoodItems foodItems={foodItems}></FoodItems>
  </Container>
  <Container><p>Above is the list of healthy food items for good health and wealth</p></Container>
  </div>
)
}
export default App;

