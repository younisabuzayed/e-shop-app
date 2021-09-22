import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import cartItemReducer from '../reducers/cartItemReducer';
import CategoriesReducer from '../reducers/CategoriesReducer';
import ProductsReducer from '../reducers/ProductsReducer';

const reducers = combineReducers({
    cartItemReducer,
    productsReducer: ProductsReducer,
    categoriesReducer: CategoriesReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;