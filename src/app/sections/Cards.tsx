export const Cards = () => {
    return (
        <section className="flex mt-[7%] items-center justify-center space-x-6">
            <div className="">
                <div
                    className="  w-[400px] bg-white border border-[#edecec] rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-[#3F4654]"
                    style={{ borderWidth: '0.5px' }} >
                    <div className="flex">
                        <img   src="/assets/loca.png" alt="empty" className="mr-6 relative right-[50px]" />
                        <div className="mt-5">
                            <h2 className="text-xl font-semibold mb-2">Where :</h2>
                            <p>Goa.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-[400px] h-[130px] bg-white border border-[#edecec] rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-[#3F4654]"
                style={{ borderWidth: '0.5px' }}>

                <div className="flex mt-5">
                    <img src="/assets/clc.png" alt="empty" className="mr-6 relative right-[10px] bottom-[9px]" />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">When</h2>
                        <p>November  21-24, 2024</p>
                        
                    </div>
                </div>

            </div>
        </section>


    );
};
