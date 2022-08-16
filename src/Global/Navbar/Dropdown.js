import React from "react";

const Dropdown = ({ item }) => {
  if (!item.dropdown) {
    return;
  } else {
    return (
      <ul
        id="tooltip"
        className="absolute px-4 py-3 space-y-3 hidden group-hover:flex group-hover:flex-col bg-black"
      >
        {item.subMenu.map((itemA) => {
          console.log(itemA);
          return (
            <li>
              {itemA.title}
              {Dropdown(itemA.dropdown)}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Dropdown;
