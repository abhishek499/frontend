import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { createPopper } from "@popperjs/core";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "./Sidebar";

const menu = [
  {
    id: 0,
    title: "Experience Hinduism",
    link: "/experiencehinduism",
    dropdown: true,
    subMenu: [
      {
        id: 1,
        title: "Banaras",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 2,
        title: "Prayagraj",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 3,
        title: "Ayodhya",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 4,
        title: "Chitrakoot",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 5,
        title: "Namish",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 6,
        title: "Boadhgaya",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 1,
    title: "Steps of Lord RAMA",
    link: "/stepsoflordrama",
    dropdown: true,
    subMenu: [
      {
        id: 11,
        title: "Banaras",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 12,
        title: "Prayagraj",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 13,
        title: "Ayodhya",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 14,
        title: "Chitrakoot",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 2,
    title: "Kashi Darshan",
    link: "/kashidarshan",
    dropdown: true,
    subMenu: [
      {
        id: 21,
        title: "Ganga Arti",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 22,
        title: "Subah-E-Banaras",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 23,
        title: "Temple Tour",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 24,
        title: "Baanfivs",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Tent City",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 3,
    title: "Pind Dan",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 31,
        title: "Banaras",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 32,
        title: "Prayagraj",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 33,
        title: "Gaya",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 4,
    title: "Honeymoon",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 41,
        title: "Nainital",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 42,
        title: "Srinagar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 43,
        title: "North",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 44,
        title: "Banfivs",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 45,
        title: "Tent City",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  { id: 5, title: "Cab", link: "/home", dropdown: false, subMenu: null },
  {
    id: 6,
    title: "Flight",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 41,
        title: "Nainital",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 42,
        title: "Srinagar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 43,
        title: "North",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 44,
        title: "Banfivs",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 45,
        title: "Tent City",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 7,
    title: "Train",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 41,
        title: "Nainital",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 42,
        title: "Srinagar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 43,
        title: "North",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 44,
        title: "Banfivs",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 45,
        title: "Tent City",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 8,
    title: "Rudraksh",
    link: "/home",
    dropdown: true,
    subMenu: [
      {
        id: 41,
        title: "Nainital",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 42,
        title: "Srinagar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 43,
        title: "North",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 44,
        title: "Banfivs",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 45,
        title: "Tent City",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
];

const Navbar2 = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
    setDropdown(false);
  };

  const onMouseLeave = () => {
    setAnchorEl(null);
    setDropdown(false);
  };

  const subDropdownRenderer = (item) => {
    if (!item.dropdown) {
      return;
    } else {
      <ul className="absolute w-[200px] px-4 py-3 space-y-3 shadow-lg group-hover:!flex group-hover:flex-col bg-black">
        {item.subMenu.map((itemA) => {
          {
            console.log(itemA);
          }
          return (
            <li className="group hover:bg-slate-500">
              <p className="m-0">{itemA.title}</p>
              {subDropdownRenderer(itemA)}
            </li>
          );
        })}
      </ul>;
    }
  };

  const dropdownRenderer = (item) => {
    if (!item.dropdown) {
      return;
    } else {
      return (
        <ul
          id="tooltip"
          className="absolute top-[3.8rem] w-[200px] px-4 py-3 space-y-3 opacity-0 shadow-lg group-hover:!opacity-100 group-hover:flex group-hover:flex-col bg-black"
        >
          {item.subMenu.map((itemA) => {
            {
              /* console.log(itemA); */
            }
            return (
              <li className="group flex  items-center hover:bg-slate-500">
                <p className="m-0">{itemA.title}</p>
                {subDropdownRenderer(itemA)}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div
      className="bg-gray-600 fixed w-full flex flex-col lg:flex-row z-10"
      data-aos="fade-down"
    >
      <div className="mx-[5%] md:mx-[7%] lg:mx-[10%] xl:mx-[15%] 2xl:[20%] lg:w-full flex justify-between items-center">
        <img
          src="https://tevily-nextjs.vercel.app/_next/static/media/logo-1.279e19a3.png"
          alt=""
          className="md:mr-[5%] my-[7%] md:my-[2.5%]"
        />
        {/* Desktop Navbar */}
        <ul className="m-0 hidden lg:flex justify-between w-full text-white font-dm font-bold">
          {menu.map((item, id) => {
            return (
              <li
                id="popcorn"
                className="relative group flex flex-col justify-between cursor-pointer px-1"
              >
                <div>
                  <div className="flex items-center text-sm xl:text-lg">
                    {item.title}
                  </div>
                  <div className="h-[3px] w-full rounded-xl bg-[#fd7e14] scale-x-0 origin-left group-hover:scale-x-100 transition-transform ease-in-out duration-1000"></div>
                  {item.dropdown && dropdownRenderer(item)}
                </div>
              </li>
            );
          })}
        </ul>
        {/* Mobile Navbar */}
        <div className="flex lg:hidden">
          {mobileNav ? (
            <MdOutlineClose
              color="white"
              size={"1.5em"}
              onClick={() => setMobileNav(false)}
            />
          ) : (
            <GiHamburgerMenu
              color="#fff"
              size={"1.5em"}
              onClick={() => setMobileNav(true)}
            />
          )}
        </div>
      </div>
      <Sidebar menu={menu} mobileNav={mobileNav} />
    </div>
  );
};

export default Navbar2;
