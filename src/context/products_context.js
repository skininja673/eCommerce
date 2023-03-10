import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
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

const ProductsContext = React.createContext();

const initialState = {
    isSidebarOpen: false,
    products_loading: false, //when we call api that will fetch all products
    products_error: false, //when we call api that will fetch all products
    products: [], //populating products array when we call api that will fetch all products
    featured_products: [], //filling featured products to showcase
};

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    };
    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    };

    const fetchProducts = async (url) => {
        try {
            const response = await axios.get(url);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    };
    useEffect(() => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        fetchProducts(url);
    }, []);

    return (
        <ProductsContext.Provider
            value={{ ...state, openSidebar, closeSidebar }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => {
    return useContext(ProductsContext);
};
