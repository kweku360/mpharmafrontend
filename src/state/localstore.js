
export const getLocalStore = () => {
    try {
        const stateobj = localStorage.getItem("state")
        if(stateobj === null) return undefined;
        return JSON.parse(stateobj)
    } catch (error) {
        return undefined;
    }
}

export const saveLocalStore = (state) => {
    try {
        const stateobj = JSON.stringify(state)
        localStorage.setItem("state",stateobj)
    } catch (error) {
    }
}