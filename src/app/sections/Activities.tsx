"use client"


import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: 'Conference Track',
      description: 'Deep dive into the Conference Track, featuring sessions with global thought leaders.',
      imageUrl: '/assets/silde1.png',
    },
    {
      title: 'Media Marketplace',
      description: 'Deep dive into the Conference Track, featuring sessions with global thought leaders',
      imageUrl: '/assets/silde2.png',
    },
    {
      title: 'Exhibition',
      description: 'Deep dive into the Conference Track, featuring sessions with global thought leaders.',
      imageUrl: '/assets/silde3.png',
    },
    {
      title: 'Cultural Evenings',
      description: 'Deep dive into the Conference Track, featuring sessions with global thought leaders.',
      imageUrl: '/assets/silde4.png',
    },
  ];

  return (
    <> <div className="bg-[#EFE4FB] h-[1000px] rounded-t-[60px] border mt-48 ">
      <div className=" mt-[70px] ml-40 ">
        <h1 className="text-[#5F259E] text-5xl font-extrabold">Major Activities</h1>
        <p className="text-[#3F4654] text-lg mt-5">WAVES isn't just a conference, it's a portal to the future of M&E. Here, industry leaders, creative minds, and tech visionaries <br />converge to explore cutting-edge trends, forge powerful connections, and celebrate the magic of storytelling.<br /> Get ready to be a part of:</p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-28 rounded-t-3xl" >
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden rounded-t-3xl">
            <img src={card.imageUrl} alt={card.title} className="w-96 h-80 object-cover rounded-t-3xl" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-purple-600 font-bold text-xl border cursor-pointer border-purple-600 rounded-[200%] p-2">→</span>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardSection;
