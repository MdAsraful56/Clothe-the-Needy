import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import DonationCard from '../components/DonationCard';

const DonationLayout = () => {

    const [donations, setDonations] = useState([]);

    useEffect( ()=>{
        fetch('../../public/Donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))
            .then(error => console.error('Error fetch data ', error ));
    } ,[])


    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="">
                {
                    donations.map((donation, index) => <DonationCard key={index} donation={donation} /> )
                }
            </div>



            <Footer />
        </div>
    );
};

export default DonationLayout;