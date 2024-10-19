import { createSlice} from "@reduxjs/toolkit"
import { DEFAULT_ITEMS } from "./items";
const itemsSlice=createSlice({
  name:'items',
  initialState:DEFAULT_ITEMS,
  reducers:{
    addInitialItems:(state,action)=>{
      return action.payload;
    }
  }
});
export const itemsActions=itemsSlice.actions
export default itemsSlice;