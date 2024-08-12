// import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none">
        &larr; Left
      </button>
    </div>
  );
};

export default Card;
