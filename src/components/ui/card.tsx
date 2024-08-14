// import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <>

<div className="w-[1470px] relative right-[152px] overflow-auto bg-black p-5">
        <div className="w-[3100px] flex ">
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src='./assets/silde1.png' className="self-center"  alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
          <div className="w-[300px] h-[350px] p-5 mr-5 bg-white rounded shadow">
            <img src={'/assets/images/envelope.svg'} className="self-center" width={250} height={250} alt="envelope image" />
            <div className="text-center mt-5">Title</div>
            <div className="text-center mt-1 text-sm text-zinc-500">description thank you very much</div>
          </div>
        </div>
      </div>


    </>
      
          
            

    
  );
};

export default Card;
