// components/Card.tsx

import Card from "@/components/ui/Card";



interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Activities: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-[#EFE4FB] h-[700px] rounded-t-[60px] border mt-11 p-[150px]">
     
    <div className="ml-[255] mt-[-76px]">
    <h1 className="text-[#5F259E] text-5xl font-extrabold">Major Activities</h1>
      <p className="text-[#3F4654] text-lg mt-5">WAVES isn't just a conference, it's a portal to the future of M&E. Here, industry leaders, creative minds, and tech visionaries <br/>converge to explore cutting-edge trends, forge powerful connections, and celebrate the magic of storytelling. Get ready to be a part of:</p>

    </div>
    
    {/* <Card/> */}
    </div>

    
  );
};

export default Activities;