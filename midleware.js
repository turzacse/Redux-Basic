const { applyMiddleware } = require("redux");
const { createStore, } = require("redux");
const { default: logger } = require("redux-logger");

//constant 
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

const intialState = {
    products: ["laptop", "phone"],
    numberOfProducts: 2
}


const getProducts = () => {
    return {
        type: GET_PRODUCT,
    };
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
}


const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts+1
            }
        default:
          return state;
    }
}


const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe( ()=> {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts("watch"));