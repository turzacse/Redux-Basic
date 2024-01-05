// state counter: 0
// action --> increment decrement reset 
// reducer 
// store
const { createStore } = require("redux");

// constants 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initial = {
    count: 0
};

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}
const resetCounter = () => {
    return {
        type: RESET,
    };
}
//reducer
const counterReducer = (state = initial, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }

        default:
            state;
    }
}

const store = createStore(counterReducer);

store.subscribe( ()=>{
    console.log(store.getState());
} )

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());