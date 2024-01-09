import { combineReducers } from 'redux'
import shopReducer from './Shopping/shopping-reducer.js'

const inititialState = {
    user: null,
}

const rootReducer = combineReducers({
    user: (state = inititialState.user, action) => {
        switch (action.type) {
            case 'SET_USER':
                return {...state, user: action.payload}
            default: 
                return state;
        }
    },
    shop: shopReducer,
})

export default rootReducer