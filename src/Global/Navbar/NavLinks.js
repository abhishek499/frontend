import React, { useState } from "react";

const menu = [
  { id: 0, title: "Home", link: "/home", dropdown: false, subMenu: null },
  {
    id: 1,
    title: "About us",
    link: "/aboutus",
    dropdown: true,
    subMenu: [
      {
        id: 11,
        title: "Meet Our Team",
        link: "/meetourteam",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 12,
        title: "Bank details",
        link: "/bankdetails",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 13,
        title: "Our Certificates",
        link: "/certificates",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 14,
        title: "Gallery",
        link: "/gallery",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 2,
    title: "Tour",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 21,
        title: "Domestic Tour",
        link: "/domesticTour",
        dropdown: true,
        subMenu: [
          {
            id: 211,
            title: "Uttar Pradesh",
            link: "/Uttar Pradesh",
            dropdown: false,
            subMenu: null,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Varanasi Tours",
    link: "/home",
    dropdown: false,
    subMenu: null,
  },
  { id: 4, title: "Nepal Tour", link: "/home", dropdown: false, subMenu: null },
  { id: 5, title: "Cab", link: "/home", dropdown: false, subMenu: null },
  { id: 6, title: "Kumbh", link: "/home", dropdown: false, subMenu: null },
  { id: 7, title: "Pind Dan", link: "/home", dropdown: false, subMenu: null },
];

const NavLinks = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const dropdownRenderer = (item) => {
    if (!item.dropdown) {
      return;
    } else {
      return (
        <ul
          id="tooltip"
          className="absolute px-4 py-3 space-y-3   group-hover:flex group-hover:flex-col bg-black"
        >
          {item.subMenu.map((itemA) => {
            console.log(itemA)
            return (
              <li>
                {itemA.title}
                {dropdownRenderer(itemA.dropdown)}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <ul className="m-0 flex justify-between w-full text-white font-dm font-bold">
      {menu.map((item, id) => {
        return (
          <li
            id="popcorn"
            className="relative group flex flex-col justify-between cursor-pointer"
          >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <div className="flex items-center">{item.title}</div>
              <div className="h-[3px] w-full rounded-xl bg-[#fd7e14] scale-x-0 origin-left group-hover:scale-x-100 transition-transform ease-in-out duration-1000"></div>
              {dropdown && item.dropdown && dropdownRenderer(item)}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
