import React from 'react';
import { Outlet } from 'react-router';
import Login from './Login';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashbord = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Login />
            <Footer />
        </div>
    );
};

export default Dashbord;