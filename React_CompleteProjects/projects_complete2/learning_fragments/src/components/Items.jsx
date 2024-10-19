import styles from './Items.module.css'
let Items=({item,bought,handlebuyButton})=>{
 
  return  <li className={`${styles.kg_item} list-group-item ${bought && "active"}`}><span className={styles.kg_span}>{item}</span><button className={`${styles.button} btn btn-info`} onClick={handlebuyButton}>Buy</button></li>
}
export default Items;