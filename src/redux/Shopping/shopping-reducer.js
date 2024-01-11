import * as actionTypes from './shopping-types';

const INITITIAL_STATE = {
    products: [], // {id, name, descr, price, img}
    cart: [], // {id, name, descr, price, img, qty}
    currentItem: null,
}

const shopReducer = (state = INITITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const { cart } = state;
            const productToAdd = action.payload

            if (!cart.find(item => item.id === productToAdd.id)) {
                return {
                    ...state,
                    cart: [...cart, {...productToAdd, qty: 1}]
                }
            } else {
                const updatedCart = cart.map((item) => 
                    item.id === productToAdd.id
                    ? {...item, qty: item.qty + 1}
                    : item
                )
                return {
                    ...state,
                    cart: updatedCart,
                }
            };
     
        case actionTypes.REMOVE_FROM_CART:
            // Implement the logic to remove a product from the cart
            return {
                ...state,
                cart: state.cart.filter(item => item.id !==  action.payload.id),
            };

        case actionTypes.ADJUST_QTY:
            // Implement the logic to adjust the quantity of a product in the cart
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id
                    ? { ...item, qty: +action.payload.qty }
                    : item
                ),
            };

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };

        default:
            return state;
    }
}

export default shopReducer;