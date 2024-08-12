
import React from 'react'

function NewsUpdate() {
    return (



        // <div className='bg-green-300 relative h-[400px] bottom-[100px]'>
        //     <h1 className="ml-10 text-[#5f259e] text-4xl font-bold ">News & Updates
        //     </h1>

        // </div>
        <div className=" ml-[255] mt-[-76px] h-[400px]">
            <h1 className="text-[#5F259E] text-5xl font-extrabold ml-11 ">News & Updates
            </h1>
            <p className="text-[#3F4654] text-lg mt-5 ml-11">Stay informed, stay ahead with the latest on WAVES:</p>

            <div className='flex gap-5 ml-11'>
                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <img src="./assets/Date1.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="absolute top-4 left-4 bg-white px-2 py-1 text-sm text-gray-700 font-semibold rounded-full shadow-md">
                        { }
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600">The stage is set, and the Indian Media and Entertainment (M&E) sector is
                            poised to captivate the world.

                            READ MORE</p>
                    </div>
                </div>

                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <img src="./assets/Date2.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="absolute top-0  left-4  px-2 py-1 text-sm text-gray-700 font-semibold rounded-full shadow-md">
                    <img src="./assets/Date.png" alt="Card Image" className="" />
                    </div>
                    <div className="p-4 ">
                        <p className="text-gray-600">India to be 3rd largest media and entertainment market in 5 yrs</p>
                    </div>
                </div>


                <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <img src="./assets/Date3.png" alt="Card Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="absolute top-4 left-4 bg-white px-2 py-1 text-sm text-gray-700 font-semibold rounded-full shadow-md">

                    </div>
                    <div className="p-4 ">
                        <p className="text-gray-600">Making India a global entertainment superpower
                            READ MORE</p>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default NewsUpdate
