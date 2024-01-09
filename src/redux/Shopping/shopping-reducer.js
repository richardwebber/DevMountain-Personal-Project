import * as actionTypes from './shopping-types';

const INITITIAL_STATE = {
    products: [], // {id, name, descr, price, img}
    cart: [], // {id, name, descr, price, img, qty}
    currentItem: null,
}

const shopReducer = (state = INITITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const {cart} = state
            const product = action.payload.id
            // If the product is not in the cart, add it; otherwise, update the quantity
            console.log(product, cart[product.id])
            if (!cart[product.id]) {
                return {
                    ...state,
                    cart: {...cart, [product.id]: {...product, qty: 1 }},
                };
            } else {
                const updatedCart = {...cart};
                updatedCart[product.id].qty += 1;

                return {
                    ...state,
                    cart: updatedCart,
                };
            }

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
                    ? { ...item, qty: action.payload.qty }
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