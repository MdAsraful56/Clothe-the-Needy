import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Help from '../components/Help';

const HelpLayout = () => {

    const [helps, setHelps] = useState([]);

    useEffect( ()=> {
        fetch('../../public/HelpData.json')
            .then(res => res.json())
            .then(data => setHelps(data))
    } ,[])

    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="container mx-auto lg:p-16 lg:my-10 md:p-5 p-2 my-2 space-y-16">
                <div className="text-center p-5">
                    <h3 className="text-3xl">How to Help</h3>
                    <p className="">There are many ways to contribute and make a difference this winter. Here's how you can help:</p>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        helps.map((help) => <Help key={help.id} help={help} />)
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HelpLayout;