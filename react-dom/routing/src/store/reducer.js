const initialState = {
    counter: 69,
    isOk: true,
};

const rootReducer = (state = initialState, action) => {
    


    
    if(action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    
    }
    if(action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    
    }
    



    return state;

};

export default rootReducer