import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ContactsButton } from "../Header/Header.styled";
import { Link, useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import { SideBarWrapper } from "./SideBarHeader.styled";
import IconClose from "../../assets/close.svg";

const SideBarHeader = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const handleItemClick = (text) => {
    if (text === "home") {
      return navigate("/");
    } else if (text === "about") {
      return navigate("/about");
    }

    return;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        padding: "112px 48px",
        width: anchor === "top" ? "auto" : 260,
        backgroundImage: 'url("SideBar1.jpg")',
        height: "100vh",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
      }}
      role="presentation"
    >
      <button
        style={{
          position: "absolute",
          top: "56px",
          left: "220px",
          background: "none",
          border: "none",
          margin: "auto",
          padding: " 0",
        }}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <img src={IconClose} alt="close" />
      </button>
      <List style={{ marginBottom: "36px" }}>
        {["home", "about"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(text)}>
              <SideBarWrapper>{text}</SideBarWrapper>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ContactsButton>
        <Link to="/contact">contact us</Link>
      </ContactsButton>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{padding: 0 }}
            id="basic-button"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBarHeader;
