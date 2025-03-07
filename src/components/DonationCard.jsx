import React from 'react';

const DonationCard = ({donation}) => {

    const {title, description, img, contacts } = donation;

    return (
        <div className='space-y-5 bg-white text-black rounded-xl p-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
            <div className="w-full h-72  flex justify-center items-center overflow-hidden">
                <img src={img} alt="" className="rounded-xl w-full h-full object-cover" />
            </div>
            <div className="">
                <h2 className="text-3xl">{title}</h2>
                <p className="">{description}</p> 
                <br />
                <div className="flex flex-row gap-3 text-sm">
                    <p className="">
                        {contacts.email}
                    </p>
                    <p className="">
                        {contacts.phone}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="btn bg-[#090979] rounded-lg hover:bg-[#790976] ">DONATE NOW</button>
            </div>
        </div>
    );
};

export default DonationCard;