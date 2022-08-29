import React from "react";
import { CgNotes } from "react-icons/cg";
import { AiFillCar, AiFillStar } from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { ImLifebuoy } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import TopBanner from "./Components/TopBanner";
import Tab from "./Components/Tab";

const Tour = ({ data }) => {
  return (
    <div>
      <TopBanner data={data} />
      <div className="h-[8vh] bg-[#FCFCFC] py-5">
        <div className="w-2/3 h-full bg-red-600"></div>
      </div>
      <div>
        <div className="flex flex-col md:space-x-10 md:flex-row px-[5vw] md:px-[15vw]">
          <div className="md:w-2/3">
            {/* Tabs */}
            <Tab />
            {/* Heading */}
            <div className="flex items-center md:mt-5">
              <CgNotes size={"1.5rem"} color="#4692e7" />
              <h6 className="font-belleza text-3xl text-[#383838] ml-2 mt-1">
                Tour Summary
              </h6>
            </div>
            {/* Details */}
            <div className="flex mt-3">
              <ul className="list-disc ml-2">
                {data.tourSummary.map((li) => (
                  <li className="font-montserrat text-sm text-[#8c8c8c]">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            {/* Itinerary */}
            <div className="mt-[5vh] md:mt-[15vh] space-y-8">
              {/* Heading */}
              <div className="flex items-center ">
                <AiFillCar size={"1.5rem"} color="#4692e7" />
                <h6 className="font-belleza text-3xl text-[#383838] ml-2 mt-1">
                  Itinerary
                </h6>
              </div>
              {/* Sub-Heading Box */}
              {data.Itinerary.map((item) => (
                <div className="space-y-5">
                  <div className="w-full h-10 flex items-center pl-8 bg-[#f3f3f3] rounded">
                    <p className="text-[15px] mb-0 font-belleza font-bold">
                      {item.title}
                    </p>
                  </div>
                  {/* sub details */}
                  <p className="text-[15px] font-montserrat ">{item.body}</p>
                </div>
              ))}
            </div>
            {/* Ruler */}
            <div className="border-[#e1e1e1] mt-10 border-b-2"></div>
            <div>
              {/* Heading 3 Inclusion */}
              <div className="flex items-center md:mt-[15vh]">
                <FiMap size={"1.5rem"} color="#4692e7" />
                <h6 className="font-belleza text-3xl text-[#383838] ml-2 mt-1">
                  Inclusion
                </h6>
              </div>
              <div>
                {/* Subheading 1 */}
                <div>
                  <h6 className="font-montserrat font-bold ">Inclusion:</h6>
                  <ul className="my-8 list-disc pb-5">
                    {data.Inclusion.inclusion.map((item) => (
                      <li className="font-montserrat text-sm text-[#8c8c8c]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Subheading2 */}
                <div>
                  <h6 className="font-montserrat font-bold ">Exclusion:</h6>
                  <ul className="my-8 list-disc pb-5">
                    {data.Inclusion.exclusion.map((item) => (
                      <li className="font-montserrat text-sm text-[#8c8c8c]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            {/* Container 1 */}
            <div className="grid grid-rows-5 py-[5%] bg-[#e1e1e1] md:relative top-[-16vh]">
              <div className="flex items-center ml-10 h-[8vh]">
                <p className="text-[20px]  font-belleza font-bold">
                  Why book with us?
                </p>
              </div>
              <div className="flex items-center ml-10 mr-5 h-[5vh] border-b-[0.1vh]  border-slate-500">
                <div className="flex ">
                  <BiDollar size={"1.7rem"} color="#f97150" />{" "}
                  <p className="font-montserrat ml-2 text-[#949494]">
                    Hassle Free Booking & Best Price Guaranted
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-10 mr-5 h-[5vh] border-b-[0.1vh]  border-slate-500 ">
                <div className="flex border-black">
                  <BsHeadphones size={"1.3rem"} color="#f97150" />{" "}
                  <p className="font-montserrat ml-2 text-[#949494]">
                    {" "}
                    Customer care available 24/7
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-10 mr-5 h-[5vh] border-b-[0.1vh]  border-slate-500">
                <div className="flex">
                  <AiFillStar size={"1.3rem"} color="#f97150" />{" "}
                  <p className="font-montserrat ml-2 text-[#949494]">
                    {" "}
                    Hand-picked Tour Packages
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-10 mr-5 h-[5vh]">
                <div className="flex">
                  <ImLifebuoy size={"1.3rem"} color="#f97150" />{" "}
                  <p className="font-montserrat ml-2 text-[#949494]">
                    {" "}
                    Free Travel Insurance
                  </p>
                </div>
              </div>
            </div>
            {/* Container 2 */}
            <div className="w-full mt-10 md:mt-0">
              <p className="font-montserrat font-bold ">Send Us An Enguiry</p>
              <form action="" method="post">
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-full h-[50px] font-montserrat"
                    placeholder="name"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    className="w-full h-[50px] font-montserrat"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="number"
                    className="w-full h-[50px] font-montserrat"
                    placeholder="Phone no"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="date"
                    className="w-full h-[50px] font-montserrat"
                    placeholder="Date"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    className="w-full h-[50px] font-montserrat"
                    placeholder="Subject"
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    rows="10"
                    type="text"
                    className="w-full h-[200px] font-montserrat"
                    placeholder="message"
                  />
                </div>
                <button className="w-2/4 h-[5vh] mt-4 flex justify-center items-center font-montserrat font-bold text-white bg-[#f97150]">
                  SUBMIT NOW
                </button>
              </form>
            </div>
            {/* Container 3 */}
            <div className="w-full py-5 flex justify-center items-center  px-auto mt-[15vh] bg-[#f97150]">
              <div className="w-3/4">
                <p className="text-white text-2xl font-belleza">
                  Have a Question?
                </p>
                <p className="text-white text-sm font-montserrat font-thin">
                  Do not hesitage to give us a call. We are an expert team and
                  we are happy to talk to you.
                </p>
                <div className="flex">
                  <BsFillTelephoneFill color="#fff" />
                  <p className="text-white text-sm font-montserrat ml-3">
                    +91 – 9936100221
                  </p>
                </div>
                <div className="flex ">
                  <BsFillTelephoneFill color="#fff" />
                  {"  "}
                  <p className="text-white text-sm font-montserrat ml-3">
                    +91 – 9936100221
                  </p>
                </div>
                <div className="flex ">
                  <FiMail color="#fff" />
                  {"  "}
                  <p className="text-white text-sm font-montserrat ml-3">
                    +91 – 9936100221
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[#e1e1e1] border-b-2 md:mx-[15vw]"></div>
        {/* Suggestions */}
        <div className="flex flex-col justify-center items-center my-10 mx-[5vw] md:mx-[15vw]">
          <p className="font-belleza text-3xl text-[#f97150] font-bold">
            Related Tour Packages
          </p>
          <div className="flex flex-col justify-center items-center  md:flex-row md:justify-between">
            <div className="md:w-[32%]  cursor-pointer">
              <img
                src="https://www.balajitravels.org/wp-content/uploads/2021/05/Master-700x500.jpg"
                alt=""
              />
              <p className="font-montserrat font-bold text-sm">
                Pind Daan Package in Gaya ji from Patna
              </p>
            </div>
            <div className="md:w-[32%] cursor-pointer">
              <img
                src="https://www.balajitravels.org/wp-content/uploads/2021/05/varanasi-700x492.jpg"
                alt=""
              />
              <p className="font-montserrat font-bold text-sm">
                Varanasi Gaya Allahabad 5N /6D Pind Daan
              </p>
            </div>
            <div className="md:w-[32%] cursor-pointer">
              <img
                src="https://www.balajitravels.org/wp-content/uploads/2021/05/Bodhgaya-Tour-700x500.jpg"
                alt=""
              />
              <p className="font-montserrat font-bold text-sm">
                Varanasi Bodh Gaya 4N /5D Pind Daan
              </p>
              <div className="h-full w-full hidden hover:flex hover:">
                <p>Pind Daan Package in Gaya ji from Patna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
