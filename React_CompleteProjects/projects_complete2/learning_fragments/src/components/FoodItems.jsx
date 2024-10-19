import { useState } from "react";
import Items from "./Items";
let FoodItems=({foodItems})=>{
let [activeItems,setactiveItems]=useState([]);
let onBuyButton=(item,event)=>{
let newItems=[...activeItems,item];
setactiveItems(newItems);
}
  return <ul className="list-group">
  {foodItems.map((item)=>(
   <Items key={item} item={item} 
   bought={activeItems.includes(item)}
   handlebuyButton={(event)=>onBuyButton(item,event)}></Items>
  ))};
  
</ul>
}
export default FoodItems;