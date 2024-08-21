
import { Button } from '@/components/ui/button'
import React from 'react'

function NewsUpdate() {
    return (



        // <div className='bg-green-300 relative h-[400px] bottom-[100px]'>
        //     <h1 className="ml-10 text-[#5f259e] text-4xl font-bold ">News & Updates
        //     </h1>

        // </div>
        <div className=" ml-[255] mt-[-76px] h-[400px] mb-96">
            <h1 className="text-[#5F259E] text-5xl font-extrabold ml-11 mb-12 ">News & Updates
            </h1>
            <p className="text-[#3F4654] text-lg mt-5 ml-11 mb-28">Stay informed, stay ahead with the latest on WAVES:</p>

            <div className='flex gap-5 ml-11'>
                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden">
                    <img src="./assets/Date1.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <p className="text-gray-600">
                            The stage is set, and the Indian Media and Entertainment (M&E) sector is poised to captivate the world.
                        </p>
                        <a href="#" className="mt-4 inline-block text-[#5F259E] hover:text-blue-700 font-semibold ">
                            Read More
                        </a>
                    </div>
                </div>

                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden">
                    <img src="./assets/Date2.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <p className="text-gray-600">
                            India to be 3rd largest media and entertainment market in 5 yrs
                        </p>
                        <button className="mt-4 text-[#5F259E] hover:text-blue-700 font-semibold focus:outline-none">
                            Read More
                        </button>
                    </div>
                </div>


                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden">
                    
                    <img src="./assets/Date3.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    
                    <div className="p-4">
                        

                        <p className="text-gray-600">
                            Making India a global entertainment superpower
                        </p>
                        <button className="mt-4 text-[#5F259E] hover:text-blue-700 font-semibold focus:outline-none">
                            Read More
                        </button>
                    </div>
                    
                </div>
                



            </div>
            <img src="./assets/Date.png" alt="Card Image" className="relative left-[230px] bottom-[370px]" />
            <img src="./assets/Group1.png" alt="Card Image" className="relative left-[630px] bottom-[450px]" />
            <img src="./assets/Group1.png" alt="Card Image" className="relative left-[1030px] bottom-[536px]" />
            <Button className="w-48 h-14 ml-2 font-semibold text-xl relative left-[730px] bottom-[150px] bg-[#5F259E] ">Read More</Button>




        </div>


    )
}

export default NewsUpdate
