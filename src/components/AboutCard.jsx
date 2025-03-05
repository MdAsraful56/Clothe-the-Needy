import React from 'react';

const AboutCard = ({card}) => {

    if (!card) {
        return <p></p>;  // ✅ Prevents errors if card is undefined
    }

    return (
    <div className='text-black'>
        <div className='flex lg:flex-row flex-col gap-5 bg-white rounded-2xl  border-b-4 border-amber-400'>
            <div className="lg:w-1/3 w-full p-6">
                <img src={card.img} className="w-full h-full rounded-lg " alt="" />
            </div>
            <div className="lg:w-2/3 w-full p-2">
                <h2 className="text-2xl">{card.title}</h2>
                <p className="">{card.description}</p>
            </div>
        </div>
    </div>
    );
};

export default AboutCard;