import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';
import {
    Home,
    SingleProduct,
    Cart,
    Checkout,
    Error,
    About,
    Products,
    PrivateRoute,
} from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='products' element={<Products />} />
                    <Route path='products/:id' element={<SingleProduct />} />
                    <Route path='*' element={<Error />} />
                    <Route path='checkout' element={<Checkout />} />
                    {/* <Route
                        path='checkout'
                        element={
                            <PrivateRoute>
                                <Checkout />
                            </PrivateRoute>
                        }
                    /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
