import React from 'react';

const AboutCard = ({card}) => {

    if (!card) {
        return <p></p>;  // ✅ Prevents errors if card is undefined
    }

    return (
    <div className='space-y-10'>
        <div className='flex flex-row gap-10 border-b-4 rounded-lg border-amber-400'>
            <div className="w-fit overflow-hidden rounded-md">
                <img src={card.img} className="w-full h-full  rounded-md" alt="" />
            </div>
            <div className="">
                <h2 className="text-lg">{card.title}</h2>
                <p className="">{card.description}</p>
            </div>
        </div>
    </div>
    );
};

export default AboutCard;