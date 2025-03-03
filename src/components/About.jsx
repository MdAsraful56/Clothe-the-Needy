import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto p-16 my-10 space-y-16'> 
            <div className="text-center mx-40 py-5">
                <h2 className="text-4xl mb-5 font-bold">About The Winter Donation Initiative</h2>
                <div className=" mx-40">
                    <p className="text-base font-medium mt-2 leading-relaxed text-center">The Winter Donation web application is dedicated to alleviating the hardships faced by vulnerable communities across Bangladesh during the cold winter months. Every year, thousands of individuals, particularly in rural and low-income areas, struggle to survive the chill because they lack proper winter clothing. This platform connects generous donors with dedicated volunteers to provide essential warmth to those in need.</p>
                </div>
            </div>
            <div className=" text-black mx-64 py-5 border-2 bg-white border-gray-200 rounded-lg p-5">
                <h2 className="text-2xl text-blue-500 mb-3 font-bold">Our Mission</h2>
                <div className="">
                    <p className="text-base font-medium leading-relaxed">We aim to make winter a little warmer for those who need it the most by facilitating the donation of winter clothing and connecting donors with volunteers. Through our platform, users can contribute by donating gently used or new winter items, volunteering their time, and spreading awareness about the cause. Together, we can protect lives and help families stay warm during the harshest months of the year.</p>
                </div>
            </div>
            
        </div>
    );
};

export default About;