import { combineReducers } from "redux"
import ProductTable from "../tables/table";

const initialState = ()=>{
    return [];
}
const ProductReducer = (state = initialState,action) =>{
    switch(action.type){
        case "ADD" :
            return state;
        case "EDIT" :
            return state;
        default :
            return state

    }

}

const priceReducer = (state = initialState,action) =>{
    switch(action.type){
        case "ADD" :
            return state;
        case "EDIT" :
            return state;
        default :
            return state

    }

}

const reducers = combineReducers({product:ProductReducer,price:priceReducer})

export default reducers;