import React from 'react';
import img from '../assets/image -  00.jpg'


const Accordion = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-10 lg:mx-16 mx-4 my-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
            <div className="lg:w-1/2 w-full">
                <img src={img} className='rounded-2xl' alt="" />
            </div>
            <div className="lg:w-1/2 w-full">
                <h3 className="text-3xl text-blue-600 text-center font-semibold lg:mb-10 mb-5">Donation Process</h3>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">How can I donate clothes?</div>
                    <div className="collapse-content text-sm">You can donate clothes by visiting our donation center or scheduling a pickup. Simply fill out the donation form on our website, and we'll guide you through the process.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">What type of clothes can I donate?</div>
                    <div className="collapse-content text-sm">We accept gently used or new clothes for all ages and genders, including: <br />
                        ✔️ Shirts, pants, jackets, and sweaters <br />
                        ✔️ Shoes and accessories <br />
                        ✔️ Winter wear (coats, gloves, scarves) <br />
                        ✔️ Kids' and baby clothing</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Where do the donated clothes go?</div>
                    <div className="collapse-content text-sm">Your donations directly help homeless shelters, low-income families, and individuals in crisis. We work with local charities to distribute them to those in need.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">How can I volunteer to help?
                    </div>
                    <div className="collapse-content text-sm">We always welcome volunteers! You can help by: <br />
                        💙 Sorting and packing donations <br />
                        💙 Distributing clothes to communities <br />
                        💙 Hosting a clothing drive in your neighborhood <br />
                        </div>
                    </div>
            </div>


        </div>
    );
};

export default Accordion;