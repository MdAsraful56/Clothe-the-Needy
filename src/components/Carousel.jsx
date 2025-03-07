import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {



    return (
        <div className="carousel w-full h-[500px] relative overflow-hidden playwrite-font">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                src="https://files.catbox.moe/gjltie.jpg"
                className="w-full h-full object-cover opacity-75" alt='cloth carousel img - 01' />
                {/* carousel text - 01 */}
                <div className='text-center'>
                    <h1 className="text-6xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">Winter Wardrobe Upgrade</h1>
                    <p className="text-white absolute lg:bottom-1/4 md:bottom-16 bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Revamp your closet with our latest winter arrivals, designed to keep you cozy and stylish.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://files.catbox.moe/libuvw.jpg"
                className="w-full h-full object-cover opacity-75" alt='cloth carousel img - 02' />
                {/* carousel text - 02 */}
                <div className='text-center'>
                    <h1 className="text-6xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">Ultimate Layering Essentials</h1>
                    <p className="text-white absolute lg:bottom-1/4 md:bottom-16 bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Master the art of layering with our versatile collection of winter jackets and sweaters.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://files.catbox.moe/yvw5k2.jpg"
                className="w-full h-full object-cover opacity-75" alt='cloth carousel img - 03' />
                {/* carousel text - 03 */}
                <div className='text-center'>
                    <h1 className="text-6xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">Accessorize Your Winter</h1>
                    <p className="text-white absolute lg:bottom-1/3 md:bottom-16 bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Find the perfect blend of comfort and fashion with our chic winter accessories.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src="https://files.catbox.moe/daej83.jpg"
                className="w-full h-full object-cover opacity-75" alt='cloth carousel img - 04' />
                {/* carousel text - 04 */}
                <div className='text-center'>
                    <h1 className="text-6xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">Support Winter Donation</h1>
                    <p className="text-white absolute lg:bottom-1/3 md:bottom-16 bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Help us spread warmth this winter. Donate clothes and blankets to need our donation drive.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;