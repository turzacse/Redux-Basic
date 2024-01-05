const { createStore, combineReducers } = require("redux");

//constant 
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

const intialState = {
    products: ["laptop", "phone"],
    numberOfProducts: 2
}

const intialCart = {
    carts: ["laptop"],
    numberOfProducts: 1
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


const getCart = () => {
    return {
        type: GET_CART,
    };
}

const addCart = (product) => {
    return {
        type: ADD_CART,
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

const cartReducer = (state = intialCart, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
            }
        case ADD_CART:
            return {
                carts: [...state.carts, action.payload],
                numberOfProducts: state.numberOfProducts+1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers( {
    productR: productReducer,
    cartR: cartReducer,
})

const store = createStore(rootReducer);
store.subscribe( ()=> {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts("watch"));

store.dispatch(getCart());
store.dispatch(addCart("phone"));