import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
        return { ...state, isSidebarOpen: true };
    }
    if (action.type === SIDEBAR_CLOSE) {
        return { ...state, isSidebarOpen: false };
    }

    if (action.type === GET_PRODUCTS_BEGIN) {
        return { ...state, products_loading: true };
    }

    if (action.type === GET_PRODUCTS_SUCCESS) {
        // updating both arrays, products array & featured_products array
        const products = action.payload;

        const featuredProducts = products.filter(
            (product) => product.featured === true
        );

        return {
            ...state,
            products_loading: false,
            products: products,
            featured_products: featuredProducts,
        };
    }

    if (action.type === GET_PRODUCTS_ERROR) {
        return { ...state, products_error: true, products_loading: false };
    }

    return state;
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
