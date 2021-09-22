import { PRODUCTS_FAILED, PRODUCTS_STATE, PRODUCTS_SUCCESS } from './ActionsTypes';
import axios from 'axios'
import Api from '../../Api';
const onProductsActionState = () =>
{
    return {
        type: PRODUCTS_STATE,
    };
};

const onProductsActionSuccess = (data) =>
{
    return {
        type: PRODUCTS_SUCCESS,
        payload: data,
    };
};

const onProductsActionFailed = (error) =>
{
    return {
        type: PRODUCTS_FAILED,
        error,
    };
};

const ProductsAction = () =>
{
    return async dispatch =>
    {
        dispatch(onProductsActionState())
        try {
            const data = await axios.get(`${Api}products`);
            dispatch(onProductsActionSuccess(data))
        } catch (error) {
            dispatch(onProductsActionFailed(error));
            console.log(error);
        }
    }
};

export default ProductsAction;