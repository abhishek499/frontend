import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import Typography from "@mui/material/Typography";
import { bgcolor } from "@mui/system";

const Sidebar = ({ menu, mobileNav }) => {
  return mobileNav ? (
    <div className={`w-full h-[95vh]  md:hidden bg-gray-600 ${mobileNav? "scale-x-0" : ""} transition-transform ${mobileNav? "scale-x-100" : ""}`}>
      <div className="h-[90%] w-full flex flex-col items-center mt-5 px-5 space-y-3">
        {menu.map((item) => {
          return (
            <div className="w-full">
              <Accordion  TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                  expandIcon={item.dropdown ? <MdExpandMore /> : null}
                  aria-controls={`panel${item.id}a-content`}
                  id={`panel${item.id}a-header`}
                >
                  <p className="text-black font-bold">{item.title}</p>
                </AccordionSummary>
                {item.dropdown ? (
                  <AccordionDetails >
                    {item.subMenu.map((itemA) => (
                      <p className="text-black font-bold ml-4">{itemA.title}</p>
                    ))}
                  </AccordionDetails>
                ) : (
                  <></>
                )}
                <div className="w-full h-0.5 bg-black"></div>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Sidebar;
