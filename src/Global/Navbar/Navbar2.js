import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { createPopper } from "@popperjs/core";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const menu = [
  // {
  //   id: 0,
  //   title: "Experience Hinduism",
  //   link: "/experiencehinduism",
  //   dropdown: true,
  //   subMenu: [
  //     {
  //       id: 1,
  //       title: "Banaras",
  //       link: "/banaras",
  //       dropdown: true,
  //       subMenu: [
  //         {
  //           id: 1,
  //           title: "Banaras1",
  //           link: "/banaras",
  //           dropdown: true,
  //           subMenu: [
  //             {
  //               id: 1,
  //               title: "Banaras2",
  //               link: "/banaras",
  //               dropdown: false,
  //               subMenu: null,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Prayagraj",
  //       link: "/banaras",
  //       dropdown: false,
  //       subMenu: null,
  //     },
  //     {
  //       id: 3,
  //       title: "Ayodhya",
  //       link: "/banaras",
  //       dropdown: false,
  //       subMenu: null,
  //     },
  //     {
  //       id: 4,
  //       title: "Chitrakoot",
  //       link: "/banaras",
  //       dropdown: false,
  //       subMenu: null,
  //     },
  //     {
  //       id: 5,
  //       title: "Namish",
  //       link: "/banaras",
  //       dropdown: false,
  //       subMenu: null,
  //     },
  //     {
  //       id: 6,
  //       title: "Boadhgaya",
  //       link: "/banaras",
  //       dropdown: false,
  //       subMenu: null,
  //     },
  //   ],
  // },
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
        dropdown: true,
        subMenu: [
          {
            id: 5,
            title: "Mangla Arti",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
          {
            id: 5,
            title: "Charo Arti",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
          {
            id: 5,
            title: "Charo Arti/Rudra Abhishek",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
        ],
      },
      {
        id: 22,
        title: "Kashi Vishwanath",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 23,
        title: "Boating",
        link: "/banaras",
        dropdown: true,
        subMenu: [
          {
            id: 5,
            title: "Boat",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
          {
            id: 5,
            title: "Bajra",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
          {
            id: 5,
            title: "Cruise",
            link: "/home",
            dropdown: false,
            subMenu: null,
          },
        ],
      },
      {
        id: 24,
        title: "Subah-E-Banaras",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Holiday in Ganga Arti",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Heritage Street walk",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Temple Tour",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Sarnath",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Ramnagar Fort",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Kashi Hindu University",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Bharat Mata Mandir",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Banarasi Sarree",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Rudraksh",
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
        link: "/pinddan",
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
        title: "Musoorie",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 43,
        title: "Manali",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 44,
        title: "Srinagar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 45,
        title: "Darjelling",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 46,
        title: "Cochin",
        link: "/home",
        dropdown: false,
        subMenu: null,
      },
      { id: 47, title: "Munab", link: "/home", dropdown: false, subMenu: null },
      {
        id: 48,
        title: "Allepy",
        link: "/home",
        dropdown: false,
        subMenu: null,
      },
      { id: 5, title: "Goa", link: "/home", dropdown: false, subMenu: null },
      { id: 5, title: "Agra", link: "/home", dropdown: false, subMenu: null },
      { id: 5, title: "Jaipur", link: "/home", dropdown: false, subMenu: null },
    ],
  },
  {
    id: 5,
    title: "Cab",
    link: "/home",
    dropdown: true,
    subMenu: [
      { id: 5, title: "Sedan", link: "/home", dropdown: false, subMenu: null },
      {
        id: 5,
        title: "7 Seater",
        link: "/home",
        dropdown: false,
        subMenu: null,
      },
      { id: 5, title: "Tempo", link: "/home", dropdown: false, subMenu: null },
      { id: 5, title: "Bus", link: "/home", dropdown: false, subMenu: null },
      { id: 5, title: "Luxury", link: "/home", dropdown: false, subMenu: null },
    ],
  },
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
  {
    id: 9,
    title: "Adventure & Life",
    link: "/banaras",
    dropdown: true,
    subMenu: [
      {
        id: 25,
        title: "Bhangarh",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Panna",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Kanha",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Jim Corbett",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Andman & Nicobar",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Ladakh",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
    ],
  },
  {
    id: 25,
    title: "Hotel",
    link: "/banaras",
    dropdown: true,
    subMenu: [
      {
        id: 25,
        title: "Pooja Residency",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Landmark",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Hotel India",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Hotel Meradinn",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Hotel Diamond",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Hotel Marine",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Amaya Clark",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Ramada",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Radisson",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Taj",
        link: "/banaras",
        dropdown: false,
        subMenu: null,
      },
      {
        id: 25,
        title: "Guleria kothi",
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

  const navigate = useNavigate();

  const onMouseEnter = (e) => {
    setAnchorEl(e.currentTarget);
    setDropdown(false);
  };

  const onMouseLeave = () => {
    setAnchorEl(null);
    setDropdown(false);
  };

  // const subDropdownRenderer = (item) => {
  //   if (!item.dropdown) {
  //     return;
  //   } else {
  //     <ul className="absolute w-[200px] px-4 py-3 space-y-3 shadow-lg group-hover:!flex group-hover:flex-col bg-black">
  //       {item.subMenu.map((itemA) => {
  //         {
  //           console.log(itemA);
  //         }
  //         return (
  //           <li className=" hover:bg-slate-500">
  //             <p className="m-0">{itemA.title}</p>
  //             {subDropdownRenderer(itemA)}
  //           </li>
  //         );
  //       })}
  //     </ul>;
  //   }
  // };

  // const dropdownRenderer = (item) => {
  //   if (!item.dropdown) {
  //     return;
  //   } else {
  //     return (
  //       <ul
  //         id="tooltip"
  //         className="absolute top-[3.8rem] w-[200px] px-4 py-3 space-y-3 opacity-0 shadow-lg group-hover:!opacity-100 group-hover:flex group-hover:flex-col bg-black"
  //       >
  //         {item.subMenu.map((itemA) => {
  //           return (
  //             <li className="group flex  items-center hover:bg-slate-500">
  //               <p className="m-0 group">{itemA.title}</p>
  //               {itemA.dropdown && (
  //                 <ul
  //                   id="tooltip"
  //                   className="dropdown-content absolute left-[100%] w-[200px] px-4 py-3 space-y-3 opacity-0 shadow-lg hidden group-hover:flex group-hover:flex-col bg-black"
  //                 >
  //                   {itemA.subMenu.map((itemB) => {
  //                     {
  //                       /* console.log(itemA); */
  //                     }
  //                     return (
  //                       <li className="group flex  items-center hover:bg-slate-500">
  //                         <p className="m-0">{itemB.title}</p>
  //                         {/* {subDropdownRenderer(itemA)} */}
  //                       </li>
  //                     );
  //                   })}
  //                 </ul>
  //               )}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   }
  // };

  return (
    <div className="fixed w-full z-10">
      <div className="bg-white flex justify-center">
        <img
          src="https://tevily-nextjs.vercel.app/_next/static/media/logo-1.279e19a3.png"
          alt=""
          className="md:mr-[5%] my-3 lg:my-0"
        />
      </div>
      <div
        className="bg-gray-600 flex flex-col lg:flex-row "
        data-aos="fade-down"
      >
        <div className="mx-[5%] md:mx-[7%] lg:mx-[10%] xl:mx-[15%] 2xl:[20%] lg:w-full flex justify-between items-center">
          {/* <img
          src="https://tevily-nextjs.vercel.app/_next/static/media/logo-1.279e19a3.png"
          alt=""
          className="md:mr-[5%] my-3 lg:my-0"
        /> */}
          {/* Desktop Navbar */}

          <div className="hidden w-full lg:flex lg:justify-between">
            {menu.map((item) => (
              <div className=" relative h-[10vh]  group max-w-[15rem]">
                <div className="dropdown flex flex-col justify-center h-full relative mx-3  text-sm text-dm font-bold text-white cursor-pointer">
                  <p className="m-0">{item.title}</p>
                  <div className="absolute top-[95%] h-[3px] w-full rounded-xl bg-[#fd7e14] scale-x-0 origin-left group-hover:scale-x-100 transition-transform ease-in-out duration-1000"></div>
                  {item.dropdown && (
                    <div className="dropdown-content absolute w-[14rem] transition ease-in-out duration-1000 top-[100%] hidden bg-black py-1">
                      {item.subMenu.map((item1) => (
                        <div className="text-white dropdown transition ease-in-out duration-1000 px-4 py-2 hover:bg-slate-300">
                          <p className="m-0" onClick={() => navigate(item1.link)}>
                            {item1.title}
                          </p>
                          {item1.dropdown && (
                            <div className="bg-black w-[15rem] dropdown-content hidden absolute left-[100%] top-0 py-1">
                              {item1.subMenu.map((item2) => (
                                <div className="text-white dropdown px-4 py-2 hover:bg-slate-300">
                                  {item2.title}
                                  {item2.dropdown && (
                                    <div className="bg-black dropdown-content hidden absolute left-[100%] top-0 py-1">
                                      {item2.subMenu.map((item3) => (
                                        <div className="text-white px-4 py-2 hover:bg-slate-300">
                                          {item3.title}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

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
    </div>
  );
};

export default Navbar2;
