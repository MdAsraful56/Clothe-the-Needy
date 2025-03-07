import React from 'react';

const Help = ({help}) => {

    const {id, title, description} = help

    return (
        <div>
            <div className=" space-y-3 text-center bg-white text-black p-3 rounded-lg">
                <h2 className="text-2xl">{id}. {title}</h2>
                <p className="">{description}</p>
                <button className="btn bg-[#519ae8] border-none ">Learn More</button>
            </div>
        </div>
    );
};

export default Help;