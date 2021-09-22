import { CATEGORIES_FAILED, CATEGORIES_STATE, CATEGORIES_SUCCESS } from './ActionsTypes';
import axios from 'axios'
import Api from '../../Api';
const onCategoriesActionState = () =>
{
    return {
        type: CATEGORIES_STATE,
    };
};

const onCategoriesActionSuccess = (data) =>
{
    return {
        type: CATEGORIES_SUCCESS,
        payload: data,
    };
};

const onCategoriesActionFailed = (error) =>
{
    return {
        type: CATEGORIES_FAILED,
        error,
    };
};

const CategoriesAction = () =>
{
    return async (dispatch) =>
    {
        dispatch(onCategoriesActionState())
        try {
            const data = await axios.get(`${Api}categories`);
            dispatch(onCategoriesActionSuccess(data))
        } catch (error) {
            dispatch(onCategoriesActionFailed(error))
        }
    }
};

export default CategoriesAction;