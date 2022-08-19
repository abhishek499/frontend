import React from "react";

const Menu = () => {
  return (
    <li
      id="popcorn"
      className="relative group flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="flex items-center">{item.title}</div>
        <div className="h-[3px] w-full rounded-xl bg-[#fd7e14] scale-x-0 origin-left group-hover:scale-x-100 transition-transform ease-in-out duration-1000"></div>
        {item.dropdown && dropdownRenderer(item)}
      </div>
    </li>
  );
};

export default Menu;
