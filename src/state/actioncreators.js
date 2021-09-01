export const add = (name, price) => {
    return (dispatch) => {
        dispatch({ type: "ADD", payload: { name, price: parseFloat(price), date: new Date().toISOString() } })
    }
}

export const edit = (id, name, price) => {
    return (dispatch) => {
        dispatch({ type: "EDIT", payload: { id, name, price: parseFloat(price), date: new Date().toISOString() } })
    }
}
export const remove = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETE", payload:{ id }})
    }
}
