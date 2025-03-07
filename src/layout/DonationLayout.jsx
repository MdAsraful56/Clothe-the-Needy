import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const DonationLayout = () => {

    const [donations, setDonations] = useState([]);

    useEffect( ()=>{
        fetch('../../public/Donation.json')
    } ,[])


    return (
        <div>
            <Navbar />
            <Outlet />




            <Footer />
        </div>
    );
};

export default DonationLayout;