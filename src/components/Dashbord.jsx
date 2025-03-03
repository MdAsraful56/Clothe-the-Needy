import React from 'react';
import { Outlet } from 'react-router';
import Login from './Login';

const Dashbord = () => {
    return (
        <div>
            <Outlet />
            <Login />
        </div>
    );
};

export default Dashbord;