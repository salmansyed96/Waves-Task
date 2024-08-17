'use client'


import { Button } from 'antd';
import React from 'react';

const images = [
    { id: 1, src: '/assets/Card1.png', alt: 'Image 1' },
    { id: 2, src: '/assets/Card2.png', alt: 'Image 2' },
    { id: 3, src: '/assets/Card3.png', alt: 'Image 3' },
    { id: 4, src: '/assets/Card4.png', alt: 'Image 4' },
    { id: 5, src: '/assets/Card5.png', alt: 'Image 5' },
    { id: 6, src: '/assets/Card6.png', alt: 'Image 6' },
];

const Gallery: React.FC = () => {
    return (
        <>
            <div className="bg-[linear-gradient(to_right,_rgba(95,37,158,0.3),_rgba(173,109,244,0.3),_rgba(255,95,228,0.3),_rgba(255,255,255,0.3))]">
                <div className='text-center p-20'>
                    <h1 className="text-5xl font-bold text-[#5F259E]">Gallery</h1> <p className="text-lg mt-5 text-[#3F4654]">Get a sneak peek into what happened at the WAVES Summit</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-10 gap-4">
                <div className="col-span-3">
                    <div className="mb-4">
                        <img className="w-full h-full object-cover" src={images[0].src} alt={images[0].alt} />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src={images[1].src} alt={images[1].alt} />
                    </div>
                </div>
                <div className="col-span-3">
                    <img className="w-full h-full object-cover" src={images[2].src} alt={images[2].alt} />
                </div>
                <div className="col-span-4">
                    <div>
                        <img className="w-full h-full object-cover" src={images[3].src} alt={images[3].alt} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <img className="w-full h-full object-cover" src={images[4].src} alt={images[4].alt} />
                        <img className="w-full h-full object-cover" src={images[5].src} alt={images[5].alt} />
                    </div>
                </div>



                <button className="w-48 h-14 ml-2 font-semibold text-xl relative left-[630px] mt-10 bg-[#5F259E] rounded-2xl text-white hover:bg-[#9C7FCB] hover:text-white">
                    View More
                </button>

            </div>
        </>
    );
};

export default Gallery;
