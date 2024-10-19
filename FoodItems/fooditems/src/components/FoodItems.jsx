import { useState } from "react";
import Items from "./Items";
const FoodItems = ({ foodItems }) => {
  const [activeItems,setactiveItems]=useState([]);
  const onBuyButton=(item,event)=>{
    const newItems=[...activeItems,item];
    setactiveItems(newItems);
  }
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Items key={item} item={item}
        bought={activeItems.includes(item)}
        handleBuyButton={(event)=>onBuyButton(item,event)} ></Items>
      ))}
    </ul>
  );
};
export default FoodItems;
