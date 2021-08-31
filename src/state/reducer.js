import { combineReducers } from "redux"
import normalizedData from "./normalize";

const initialState = normalizedData
const ProductReducer = (state = initialState.entities.products,action) =>{
    switch(action.type){
        case "ADD" :
            return state;
        case "EDIT" :
            return state;
        default :
            return state

    }

}

const priceReducer = (state = initialState.entities.prices,action) =>{
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