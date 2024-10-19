import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setfoodItems] = useState([/*
    "Dal",
    "Chawal",
    "Roti",
    "Apple",
    "Salad",
    "Milk",*/
  ]);
  const onKeyDown = (event) => {
if(event.key==='Enter'){
let newFoodItem=event.target.value;
event.target.value="";
let newItems=[...foodItems,newFoodItem];
setfoodItems(newItems);

}
   };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food Items</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
