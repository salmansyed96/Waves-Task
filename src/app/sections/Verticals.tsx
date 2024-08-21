export const Verticals = () => {
    return (
      <div className="mt-[12.5rem] ml-32 ">
      <section className="flex mt-[7%] items-center justify-center ml-32">
        <div className="text-center">
          <img src="/assets/Rect.png" alt="empty" className="mb-4" />
          <h1 className="text-4xl font-bold mb-2 relative bottom-[64px] right-[51px]">WAVES Verticals</h1>
          <p className="text-left relative bottom-[48px] text-[#3F4654] gap-4">
            WAVES brings together a diverse range of <br/>stakeholders shaping the future of media and entertainment.<br/> Here's an overview of the key industry segments <br/>represented at WAVES:
          </p>
        </div>
        <div className=" relative -right-[1px] -top-[3px]">
        <div
        className="ml-10 w-64 h-48 border rounded-3xl p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Icon-youtub.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the first box.</p>
      </div>
        </div>
      <div className="relative -right-[35px] -top-[120px]">
      <div
        className="w-64 h-48 border rounded-3xl p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Radio.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the second box.</p>
      </div>
      </div>
      <div className="relative -right-[-220px] -top-[-100px]">
      <div
        className="w-64 h-48 border rounded-3xl p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Monitor.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the third box.</p>
      </div>
      </div>
      </section>
      </div>
    );
  };
  