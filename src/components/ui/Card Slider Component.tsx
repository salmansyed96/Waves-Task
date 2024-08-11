// // components/CardSlider.tsx
// "use client"

// import React, { useState } from 'react';
// import Card from '@/app/sections/Card';

// const cardsData = [
//   {
//     image: '/assets/image1.jpg',
//     title: 'Card 1',
//     description: 'Description for Card 1'
//   },
//   {
//     image: '/assets/image2.jpg',
//     title: 'Card 2',
//     description: 'Description for Card 2'
//   },
//   {
//     image: '/assets/image3.jpg',
//     title: 'Card 3',
//     description: 'Description for Card 3'
//   },
//   {
//     image: '/assets/image4.jpg',
//     title: 'Card 4',
//     description: 'Description for Card 4'
//   },
//   {
//     image: '/assets/image5.jpg',
//     title: 'Card 5',
//     description: 'Description for Card 5'
//   },
//   {
//     image: '/assets/image6.jpg',
//     title: 'Card 6',
//     description: 'Description for Card 6'
//   },
// ];

// const CardSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative">
//       <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
//         {cardsData.map((card, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-80 snap-start ${
//               index === currentIndex ? 'block' : 'hidden'
//             }`}
//           >
//             <Card
//               image={card.image}
//               title={card.title}
//               description={card.description}
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CardSlider;



'use client'

import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '100px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CardSlider: React.FC = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    
  </>
);

export default CardSlider;