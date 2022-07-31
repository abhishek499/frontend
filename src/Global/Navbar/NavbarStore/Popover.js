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
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className={style.buttonTextnav}
        hideBackdrop="true"
        onMouseOver={(e) => {
          setAnchorEl(e.currentTarget);
          setShow(true);
        }}
          onMouseLeave={() => {
            setAnchorEl(null);
            setShow(false);
          }}
      >
        {props.Page.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={show}
        style={{ pointerEvents: "none"}}
        disableEnforceFocus={false}
      >
        {props.Page.option.map((item) => (
          <MenuItem
          style={{ pointerEvents: "auto" }}
            key={item.id}
          >
            {item.option}
          </MenuItem>
        ))}
      </Menu>
      {/* </div> */}
    </>
  );
}

export default Popover2;
