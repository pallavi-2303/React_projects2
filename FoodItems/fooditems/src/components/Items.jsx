import styles from "./Items.module.css";
const Items = ({ item,bought,handleBuyButton }) => {
  
  return (
    <li className={`list-group-item  ${bought && 'active'}`}>
      <span className="fooditem"> {item}</span>
      <button className={`${styles.button} btn btn-info`}
      onClick={handleBuyButton}
      >Buy</button>
    </li>
  );
};
export default Items;
