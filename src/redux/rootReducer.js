import { combineReducers } from 'redux'

const inititialState = {
    user: null,
}

const rootReducer = combineReducers({
    user: (state = inititialState.user, action) => {
        switch (action.type) {
            case 'SET_USER':
                return action.payload;
            default: 
                return state;
        }
    },
})

export default rootReducer