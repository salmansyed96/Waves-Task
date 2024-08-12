// // components/Card.tsx


// interface CardProps {
//   image: string;
//   title: string;
//   description: string;
// }

// const Card: React.FC<CardProps> = ({ image, title, description }) => {
//   return (
//     <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-gray-600 mt-2">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

"use client"
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardMedia: React.FC = () => (
  <>
  <div className='flex gap-3'>
  {/* <Card
  hoverable
  style={{ width: '336px', height: '417px' }}
  cover={<img alt="example" src="/assets/silde1.png" className="mr-6" />}
  
>
<Meta title="Europe Street beat" description="www.instagram.com" />
  
</Card> */}

<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Conference Track" description="Dive deep into the Conference Track, featuring
sessions with global thought...." />
</Card>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Media Marketplace" description="Explore the vibrant Media Marketplace, a
dedicated platform showcasing India's M&E " />
</Card>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Exhibition" description="Immerse yourself in the dynamic Exhibition:" />
</Card>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Cultural Evenings" description=" Immerse yourself in the rich tapestry" />
</Card>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
</Card>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
<Meta title="Europe Street beat" description="www.instagram.com" />
</Card>
  </div>
</>
);

export default CardMedia;