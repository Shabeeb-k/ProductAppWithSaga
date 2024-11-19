import { combineReducers } from 'redux';
import productsReducer from './redux/reducers/productReducer';
import cartReducer from './redux/reducers/cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
