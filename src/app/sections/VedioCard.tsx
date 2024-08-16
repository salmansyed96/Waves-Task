// components/VideoCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaPlay, FaVideo } from 'react-icons/fa';

interface VideoCardProps {
    videoSrc: string;
    title: string;
    description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, description }) => {
    return (
        <>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <Image src={videoSrc} alt="Video Thumbnail" width={400} height={225} className="w-full h-auto object-cover" />
                <div className="absolute top-2 left-2 text-white text-xl">
                    <FaPlay className="bg-black p-2 rounded-full" />
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <FaVideo className="mr-2" />
                    {title}
                </h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="bg-black  text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                Visit Us
                </button>
            </div>
        </div>
        </>
    );
};

export default VideoCard;
