import React, { useEffect, useState } from 'react';
import AboutCard from './AboutCard';
import { Outlet } from 'react-router';
import Accordion from './Accordion';
import DivisionCard from './DivisionCard';


const About = () => {


    const [aboutCards, setAboutCards] = useState([]);
    const [divisions, setDivisions] = useState([]);

    useEffect(()=> {
        fetch('../../public/AboutCardsData.json')
            .then(res => res.json())
            .then(data => setAboutCards(data))
            .catch(err => console.error('Error fetching data:', err));
    }, [])

    useEffect( ()=>{
        fetch('../../public/Division.json')
            .then(res => res.json())
            .then(data => setDivisions(data))
            .then(error => console.error("Error fetching data:", error));
    } ,[])

    console.log(aboutCards);

    return (
        <div className='container mx-auto lg:p-16 lg:my-10 md:p-5 p-2  my-2 space-y-16'> 
            <div className="text-center lg:mx-40 md:mx-10 mx-3 py-5">
                <h2 className="text-4xl mb-5 font-bold">About The Winter Donation Initiative</h2>
                <div className=" lg:mx-40 mx-10">
                    <p className="text-base font-medium mt-2 leading-relaxed text-center">The Winter Donation web application is dedicated to alleviating the hardships faced by vulnerable communities across Bangladesh during the cold winter months. Every year, thousands of individuals, particularly in rural and low-income areas, struggle to survive the chill because they lack proper winter clothing. This platform connects generous donors with dedicated volunteers to provide essential warmth to those in need.</p>
                </div>
            </div>
            <div className=" text-black lg:mx-64 md:mx-20 mx-2 py-5 border-2 bg-white border-gray-200 rounded-lg p-5">
                <h2 className="text-2xl text-blue-500 mb-3 font-bold">Our Mission</h2>
                <div className="">
                    <p className="text-base font-medium leading-relaxed">We aim to make winter a little warmer for those who need it the most by facilitating the donation of winter clothing and connecting donors with volunteers. Through our platform, users can contribute by donating gently used or new winter items, volunteering their time, and spreading awareness about the cause. Together, we can protect lives and help families stay warm during the harshest months of the year.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mx-10  mx-2 ">
                {
                    aboutCards.map((card)=> <AboutCard key={card.key}  card={card} />)
                }
            </div>
            <Accordion />
            <Outlet />
            <div className="text-center lg:mx-40 md:mx-10 mx-3 py-5">
                <h2 className="text-3xl mb-3 font-semibold">Supported Divisions</h2>
                <p className="">We are currently collecting donations in the following divisions. Your generous support can reach these areas and help those in need.</p>
            </div>
            <div className="">
                {
                    divisions.map((division, index) => <DivisionCard key={index} division={division} />)
                }
            </div>
        </div>
    );
};

export default About;