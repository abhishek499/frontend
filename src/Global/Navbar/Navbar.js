import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import functionality from "./NavbarStore/NavbarStore";
import style from "./Navbar.module.css";
import Popover2 from "./NavbarStore/Popover";

const ResponsiveAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const { Home } = functionality;

  return (
    <>
      {/* <img src="http://tirupatitravels.org/images/logo.png" alt="logo" /> */}
      <div className={style.Container}>
        <AppBar position="fixed" className={style.Navbar}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 0,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  margin: "0",
                }}
              >
                Logo
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  padding: "0 2%",
                }}
              >
                {Home.map((page) => (
                  <Popover2 key={page.id} Page={page} />
                ))}
                <Button className={style.element}>
                  <SearchIcon />
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <SearchIcon className={style.Icon} />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => setOpen(true)}
                  color="inherit"
                >
                  <MenuIcon className={style.Icon} />
                </IconButton>
                {open && (
                  <div className={style.sidebarMenu}>
                    <div className={style.IconContainer}>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => setOpen(false)}
                        color="inherit"
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                    <div className={style.ElementContainer}>Logo</div>
                    <div
                      className={style.ElementContainer}
                      style={{ padding: "2% 3%" }}
                    >
                      {Home.map((page) => (
                        <Typography
                          onClick={() => {
                            setOpen(false);
                          }}
                          textAlign="center"
                          className={style.elementNav}
                        >
                          {" "}
                          <b>{page.name}</b>
                        </Typography>
                      ))}
                    </div>
                  </div>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};
export default ResponsiveAppBar;
