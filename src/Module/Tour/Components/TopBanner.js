import React from "react";

const TopBanner = ({data}) => {
  return (
    <div className="relative w-full h-[45vh] object-contain overflow-hidden">
      <img
        src={data.image}
        alt=""
        className="w-full h-full object-cover transform transition-all  first:scale-[110%] duration-[3000ms] ease-in-out "
      />
      <div className="absolute bottom-5 px-[5vw] md:px-[15vw]">
        <h1 className="text-3xl md:text-4xl font-belleza text-white">
          {data.title}
        </h1>
      </div>
    </div>
  );
};

export default TopBanner;
