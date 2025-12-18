const Banner = () => {
  return (
    <div className="relative bg-[url(/banner.jpg)] h-[calc(100vh-92px)] bg-no-repeat bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-gray-900/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Qarabağ FK</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
