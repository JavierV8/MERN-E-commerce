import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// reducer
import menuToggleReducer from './reducers/menuToggle';
import productsReducer from './reducers/Products';
import orderDataReducer from './reducers/OrderData';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    menuToggle: menuToggleReducer,
    products: productsReducer,
    orderData: orderDataReducer,
    auth: authReducer,
});

const initStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default initStore;
