import { combineReducers } from "redux"
import normalizedData from "./normalize";

const initialState = normalizedData
const ProductReducer = (state = initialState.entities,action) =>{
    const nextPriceId = Object.keys(state.prices).length+1;
    const nextProductId = Object.keys(state.products).length+1;

    switch(action.type){
        case "ADD" :
            console.log(state)
            let newstate = state;
            newstate.prices[nextPriceId] = {id:nextPriceId,price:action.payload.price,date:action.payload.date}
            newstate.products[nextProductId] = {id:nextProductId,name:action.payload.name,prices:[nextPriceId]};
            return newstate;
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