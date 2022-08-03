import * as React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import style from "../Navbar.module.css";

function Popover2(props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const open = Boolean(anchorEl);
  return (
    <div
    style={{
      display:"flex",
      justifyContent:'space-between',
      alignItem:"center",
    }}
      onMouseOver={(e) => {
        setAnchorEl(e.currentTarget);
        setShow(true);
      }}
      onMouseLeave={() => {
        setAnchorEl(null);
        setShow(false);
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className={style.buttonTextnav}
      >
        {props.Page.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={show}
        style={{ pointerEvents: "none" }}
        disableEnforceFocus={false}
      >
        {props.Page.option.map((item) => (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setShow(false);
            }}
            style={{ pointerEvents: "auto" }}
            key={item.id}
          >
            {item.option}
          </MenuItem>
        ))}
      </Menu>
      {/* </div> */}
    </div>
  );
}

export default Popover2;
