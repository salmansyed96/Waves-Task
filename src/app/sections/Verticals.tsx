export const Verticals = () => {
    return (
      <section className="flex mt-[7%] items-center justify-center">
        <div className="text-center">
          <img src="/assets/Rect.png" alt="empty" className="mb-4" />
          <h1 className="text-5xl font-bold mb-4">WAVES Verticals</h1>
          <p className="text-left">
            WAVES brings together a diverse range of stakeholders shaping the future of media and entertainment. Here's an overview of the key industry segments represented at WAVES:
          </p>
        </div>
        <div
        className="w-64 h-48 border rounded-xl p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Icon-youtub.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the first box.</p>
      </div>
      <div
        className="w-64 h-48 border rounded-lg p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Radio.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the second box.</p>
      </div>
      <div
        className="w-64 h-48 border rounded-lg p-4 flex flex-col items-center justify-center text-[#3F4654]"
        style={{ borderWidth: '0.5px', borderColor: '#5F259E' }}
      >
        <h2 className="text-xl font-semibold mb-2"><img src="/assets/Monitor.png" alt="empty" className="mb-4" /></h2>
        <p>Content for the third box.</p>
      </div>
      </section>
    );
  };
  