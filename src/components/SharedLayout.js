import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// side bar is the bar that pop up after hitting the hamburger icon, so its present always in every size
//but its hidden by functionality of hamburger
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
};

export default SharedLayout;
