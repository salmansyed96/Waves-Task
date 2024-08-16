import React from 'react'

function Gallery() {
  return (
    <div className="w-full h-[1018px] bg-[linear-gradient(to_right,_rgba(95,37,158,0.3),_rgba(173,109,244,0.3),_rgba(255,95,228,0.3),_rgba(255,255,255,0.3))]">
        <div className='text-center'>
        <h1 className="text-5xl font-bold text-[rgb(95,37,158)]">Gallery</h1>
<p className="text-lg font-semibold text-[#3F4654]">Get a sneak peek into what happened at the WAVES Summit</p>
</div>

<div className="container mx-auto">
    <div className="flex flex-wrap">
        {/* First Row */}
        <div className="w-full md:w-full bg-red-300 p-4">
            <div className="w-full md:w-full">A</div>
        </div>
        {/* Second Row */}
        <div className="w-full md:w-full bg-blue-300 p-4">
            <div className="w-full md:w-full">B</div>
        </div>
        {/* Third Row */}
        <div className="w-full md:w-4/12 bg-green-300 p-4">
            C
        </div>
        {/* Fourth Row */}
        <div className="w-full md:w-5/12 bg-yellow-300 p-4">
            <div className="w-full md:w-full bg-purple-300 p-4">
                <div className="w-full md:w-full">A</div>
            </div>
            <div className="flex">
                <div className="w-full md:w-6/12 bg-pink-300 p-4">B</div>
                <div className="w-full md:w-6/12 bg-orange-300 p-4">C</div>
            </div>
        </div>
    </div>
</div>












</div>
  )
}

export default Gallery
