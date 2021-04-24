
//inisialisasi redux
const redux = require("redux");
const createStore = redux.createStore;

//inisialisasi State awal
const initialState = {
    counter: 0,
};

//init reducer
const rootReducer = (state = initialState, action) => {
    //increment counter
    if(action.type === 'INC_COUNTER') {
        return{
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER') {
        return{
            ...state,
            counter: state.counter + action.value,
        };
    }
    return state;
};

   

//store
const store = createStore(rootReducer);

store.dispatch({ type: "INC-COUNTER"});
store.dispatch({ type: "ADD_COUNTER", value: 10});
console.log(store.getState());