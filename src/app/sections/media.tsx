// pages/index.tsx
import React from 'react';
import VideoCard from './VedioCard';

const Media: React.FC = () => {
    return (
        <>
         <h1 className='mt-16 text-5xl font-bold text-[#5F259E] text-center p-14'>Social Media Corner</h1>
            <div className=" mb-16container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <VideoCard
                    videoSrc="/assets/Video1.png"
                    title="WAVES
                    on 15 June 2024"
                    description="#music #event ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
                <VideoCard
                    videoSrc="/assets/Video1.png"
                    title="WAVES
                    on 15 June 2024"
                    description="#music #event ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                />
                <VideoCard
                    videoSrc="/assets/Video2.png"
                    title="WAVES
                    on 15 June 2024"
                    description="#music #event ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
            </div>
        </>
    );
};

export default Media;
