export const add = (name,price) =>{
    return (dispatch)=>{
        dispatch({type:"ADD",payload:{name,price,date: new Date()}})
    }
}

export const edit = (id,name,price) =>{
    return (dispatch)=>{
        dispatch({type:"EDIT",payload:{id,name,price}})
    }
}
