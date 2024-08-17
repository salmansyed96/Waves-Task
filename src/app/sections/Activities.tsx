// components/Card.tsx

import Card from "@/components/ui/Card";
import { Star,  Calendar,  } from "lucide-react";



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

    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-id="element-17">
          <div className="border border-gray-300 p-4 rounded-lg" data-id="element-18">
            <h3 className="text-green-800" data-id="element-19">Cabin in the Woods</h3>
            <img src="https://via.placeholder.com/150" alt="Cabin in the Woods" className="mt-2" data-id="element-20" />
            <p className="mt-2" data-id="element-21">
              A private cabin for those who seek solace and inspiration in the
              solitude of the forest.
            </p>
            <div className="flex mt-2 justify-between items-center" data-id="element-22">
              <span className="flex items-center" data-id="element-23">
                <Calendar className="text-green-800" size={16} data-id="element-24" />
                <span className="ml-1" data-id="element-25">Available Now</span>
              </span>
              <Star className="text-yellow-400" size={20} data-id="element-26" />
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg" data-id="element-27">
            <h3 className="text-green-800" data-id="element-28">Lakeside Lodge</h3>
            <img src="https://via.placeholder.com/150" alt="Lakeside Lodge" className="mt-2" data-id="element-29" />
            <p className="mt-2" data-id="element-30">
              Enjoy the tranquil waters and breathtaking sunsets with a stay at
              our lakeside lodge.
            </p>
            <div className="flex mt-2 justify-between items-center" data-id="element-31">
              <span className="flex items-center" data-id="element-32">
                <Calendar className="text-green-800" size={16} data-id="element-33" />
                <span className="ml-1" data-id="element-34">Book for Summer</span>
              </span>
              <Star className="text-yellow-400" size={20} data-id="element-35" />
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg" data-id="element-36">
            <h3 className="text-green-800" data-id="element-37">Hilltop Haven</h3>
            <img src="https://via.placeholder.com/150" alt="Hilltop Haven" className="mt-2" data-id="element-38" />
            <p className="mt-2" data-id="element-39">
              Perched atop the rolling hills, our hilltop haven offers stunning
              views of Wildwood Forest.
            </p>
            <div className="flex mt-2 justify-between items-center" data-id="element-40">
              <span className="flex items-center" data-id="element-41">
                <Calendar className="text-green-800" size={16} data-id="element-42" />
                <span className="ml-1" data-id="element-43">Spring Specials</span>
              </span>
              <Star className="text-yellow-400" size={20} data-id="element-44" />
            </div>
          </div>
        </section>
    </div>

    
  );
};

export default Activities;