import {combineReducers} from 'redux';
import CartReducer from '../redux/CartReducer';

const rootReducer = combineReducers({
    stateCart: CartReducer
})

export default rootReducer;