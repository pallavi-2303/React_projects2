import { useDispatch } from "react-redux";
import { useRef } from "react";
const Controls = () => {
const dispatch= useDispatch();
const inputElement=useRef();
const handleIncrement=()=>{
dispatch({type:"INCREMENT"});
}
const handleDecrement=()=>{
  dispatch({type:"DECREMENT"});
}
const handleAdd=()=>{
  dispatch({type:"ADD",payload:{
    num:inputElement.current.value,
  }});
  inputElement.current.value="";
}
const handleSubstract=()=>{
  dispatch({type:"SUBSTRACT",payload:{
    num:inputElement.current.value,
  }});
  inputElement.current.value="";
}
const handlePrivacy=()=>{
  dispatch({type:"PRIVACY_TOGGLE"})
}
  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
<button onClick={handleDecrement} type="button" className="btn btn-success">-1</button>
<button onClick={handlePrivacy} type="button" className="btn btn-warning">Privacy Toggle</button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
  <input type="text" 
  ref={inputElement}
  className="number-input"
  placeholder="Enter your number"/>
<button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
<button onClick={handleSubstract} type="button" className="btn btn-danger">Substract</button>
    </div>
    </>
  );
};
export default Controls;
