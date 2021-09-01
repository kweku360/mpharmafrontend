import { combineReducers } from "redux"
import normalizedData from "./normalize";
import { getLocalStore } from "./localstore";

const getData = ()=>{
    console.log(getLocalStore());
    if(getLocalStore() === undefined)
    return normalizedData.entities

    return getLocalStore();
}

const initialState = getData()

const ProductReducer = (state = initialState.entities || initialState,action) =>{
    console.log(state);
    const nextPriceId = Object.keys(state.prices).length+1;
    const nextProductId = Object.keys(state.products).length+1;

    switch(action.type){
        case "ADD" :
            console.log(state)
            return  {
                ...state,
                  prices : {...state.prices,[nextPriceId] : {id:nextPriceId,price:action.payload.price,date:action.payload.date}},
                  products: {...state.products,[nextProductId]:{id:nextProductId,name:action.payload.name,prices:[nextPriceId]}}    
            };
        case "EDIT" :
            return  {
                ...state,
                  prices : {...state.prices,[nextPriceId] : {id:nextPriceId,price:action.payload.price,date:action.payload.date}},
                  products: {...state.products,
                    [state.products[action.payload.id].id]:{id:action.payload.id,name:action.payload.name,
                        prices:[...state.products[action.payload.id].prices,nextPriceId]}}    
            };
        default :
            return state

    }

}


const reducers = combineReducers({product:ProductReducer})

export default reducers;