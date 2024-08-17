// components/Card.tsx

// import Card from "@/components/ui/Card";
// import { Star,  Calendar,  } from "lucide-react";



// interface CardProps {
//   image: string;
//   title: string;
//   description: string;
// }

// const Activities: React.FC<CardProps> = ({ image, title, description }) => {
//   return (
    // <div className="bg-[#EFE4FB] h-[700px] rounded-t-[60px] border mt-11 p-[150px]">
     
    // <div className="ml-[255] mt-[-76px]">
    // <h1 className="text-[#5F259E] text-5xl font-extrabold">Major Activities</h1>
    //   <p className="text-[#3F4654] text-lg mt-5">WAVES isn't just a conference, it's a portal to the future of M&E. Here, industry leaders, creative minds, and tech visionaries <br/>converge to explore cutting-edge trends, forge powerful connections, and celebrate the magic of storytelling. Get ready to be a part of:</p>

    // </div>
    
    {/* <Card/> */}

//     
//          

//           <div className="border border-gray-300 p-4 rounded-lg" data-id="element-36">
//             <h3 className="text-green-800" data-id="element-37">Hilltop Haven</h3>
//             <img src="https://via.placeholder.com/150" alt="Hilltop Haven" className="mt-2" data-id="element-38" />
//             <p className="mt-2" data-id="element-39">
//               Perched atop the rolling hills, our hilltop haven offers stunning
//               views of Wildwood Forest.
//             </p>
//             <div className="flex mt-2 justify-between items-center" data-id="element-40">
//               <span className="flex items-center" data-id="element-41">
//                 <Calendar className="text-green-800" size={16} data-id="element-42" />
//                 <span className="ml-1" data-id="element-43">Spring Specials</span>
//               </span>
//               <Star className="text-yellow-400" size={20} data-id="element-44" />
//             </div>
//           </div>
//         </section>
//     </div>

    
//   );
// };

// export default Activities;



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
      description: 'Explore the vibrant Media Marketplace, a dedicated platform showcasing India\'s M&E.',
      imageUrl: '/assets/silde2.png',
    },
    {
      title: 'Exhibition',
      description: 'Immerse yourself in the dynamic Exhibition.',
      imageUrl: '/assets/silde3.png',
    },
    {
      title: 'Cultural Evenings',
      description: 'Immerse yourself in the rich tapestry of India\'s cultural evenings.',
      imageUrl: '/assets/silde4.png',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={card.imageUrl} alt={card.title} className="w-screen h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-purple-600 font-bold text-xl">→</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
