
import * as React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import style from "../Navbar.module.css";


function Popover2(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    return (
        <div style={{margin: '0 1%'}}>
           
         
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{textAlign:'left'}}
                    onClick={(e)=>setAnchorEl(e.currentTarget)}
                    className={style.element}>
                    {props.Page.name}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  > 
                  {props.Page.option.map((item)=>(
                    <MenuItem  key={item.id} onClick={() => setAnchorEl(null)}>{item.option}</MenuItem>
                  ))}
              
                  </Menu>
                {/* </div> */}
        </div>
    );
}

export default Popover2;