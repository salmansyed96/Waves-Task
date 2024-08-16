import React from 'react'

function Gallery() {
  return (
    <div className="w-full h-[1018px] bg-[linear-gradient(to_right,_rgba(95,37,158,0.3),_rgba(173,109,244,0.3),_rgba(255,95,228,0.3),_rgba(255,255,255,0.3))]">
        <div className='text-center p-20'>
        <h1 className="text-5xl font-bold text-[#5F259E]">Gallery</h1>
<p className="text-lg font-semibold text-[#3F4654]">Get a sneak peek into what happened at the WAVES Summit</p>
</div>

<div className="container mx-auto">
    <div className="flex flex-wrap">
        
        {/* First Row */}
        <div className="w-full md:w-4/12 bg-pink-300 p-4 h-[320px]">
        <img src="/assets/photo1.png" alt="empty" className="" />
</div>

<div className="w-full md:w-4/12 bg-yellow-300 p-4" style={{ position: 'relative', top: '0', left: '20px',height: '618px' }}>
    B
</div>

<div className="w-[] md:w-4/12 bg-red-300 p-4 h-[345px]" style={{ position: 'relative', left: '43px' }}>
    A
</div>



<div className="w-full md:w-4/12 bg-green-300 p-4" style={{ position: 'relative', bottom: '347px', height: '345px' }}>
    
    D
</div>
<div className="w-full md:w-4/12 bg-red-300 p-4" style={{ position: 'relative', left: '487px', bottom: '264px', width: '17%', height: '255px' }}>
    F
</div>
<div className=" ml-[53px] gap-1 w-full md:w-4/12 bg-green-300 p-4" style={{ position: 'relative', left: '450px', bottom: '264px', width: '17%', height: '255px' }}>
    g
</div>

    </div>
    
</div>












</div>
  )
}

export default Gallery
