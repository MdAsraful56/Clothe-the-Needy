import React from 'react';
import { ImLocation2 } from "react-icons/im";

const DivisionCard = ({division}) => {

    const {title, description } = division

    return (
        <div className='text-center bg-white rounded-lg shadow-2xl text-black p-3'>
            <div className="flex items-center justify-center">
                <ImLocation2 color='blue' size={40} />
            </div>
            <div className="">
                <h3 className="text-2xl">{title}</h3>
                <p className="">{description}</p>
            </div>
        </div>
    );
};

export default DivisionCard;