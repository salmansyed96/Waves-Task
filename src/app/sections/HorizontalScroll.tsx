const HorizontalScroll: React.FC = () => {
  return (
    <div className="banner-bg h-[260px] overflow-hidden relative">
      <h1 className="text-center text-white text-3xl font-bold mt-3 mb-1">Sponsors / Partners</h1>
  <div className="overflow-hidden whitespace-nowrap relative w-full h-full">
    <div className="inline-block whitespace-nowrap animate-marquee">
      <img src="/assets/brand1.png" alt="Google" className="inline-block mr-5 h-16" />
      <img src="/assets/brand2.png" alt="Microsoft" className="inline-block mr-5 h-16" />
      <img src="/assets/brand6.png" alt="Amazon" className="inline-block mr-5 h-16" />
      <img src="/assets/brand4.png" alt="Google" className="inline-block mr-5 h-16" />
      <img src="/assets/brand5.png" alt="Microsoft" className="inline-block mr-5 h-16" />
      <img src="/assets/brand6.png" alt="Amazon" className="inline-block mr-5 h-16" />
      {/* Repeat logos as needed for a continuous effect */}
    </div>
  </div>
</div>

  );
};

export default HorizontalScroll;
