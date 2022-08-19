import React from "react";

const Tab = () => {
  return (
    <div className="hidden md:flex space-x-10 mt-2">
      <a
        href=""
        className="pb-3 font-montserrat text-decoration-none text-m hover:border-b-2 border-[#FD978C] text-slate-400 hover:text-black "
      >
        Details
      </a>
      <a
        href=""
        className="pb-2 font-montserrat text-decoration-none text-m hover:border-b-2 border-[#FD978C] text-slate-400 hover:text-black "
      >
        Itinerary
      </a>
      <a
        href=""
        className="pb-3 font-montserrat text-decoration-none text-m hover:border-b-2 border-[#FD978C] text-slate-400 hover:text-black "
      >
        Inclusion
      </a>
    </div>
  );
};

export default Tab;
