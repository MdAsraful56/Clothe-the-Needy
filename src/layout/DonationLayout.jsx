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
        <div className=''>
            <Navbar />
            <Outlet />
            <div className="container mx-auto lg:p-16 lg:my-10 md:p-5 p-2  my-2 space-y-16">
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {
                        donations.map((donation, index) => <DonationCard key={index} donation={donation} /> )
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DonationLayout;