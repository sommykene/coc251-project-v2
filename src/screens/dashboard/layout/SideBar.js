import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import Home from "@mui/icons-material/Home";
import School from "@mui/icons-material/School";
import Games from "@mui/icons-material/Games";
import Article from "@mui/icons-material/Article";
import Logout from "@mui/icons-material/Logout";

//img
import logo from "@assets/images/logo.svg";
import textLogo from "@assets/images/textlogo.png";
import profile from "@assets/images/profile.png";
import { Avatar } from "@mui/material";
import { Language, Settings, Translate } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open} size="">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          m: "8px 16px",
          justifyContent: open ? "space-between" : "center",
        }}
      >
        <img src={logo} alt="Asusu Igbo Logo" />
        {open && <img src={textLogo} alt="Asusu Igbo Logo" />}
      </Box>
      {!open ? (
        <Box sx={{ m: "auto", mt: "10px" }}>
          <Avatar src={profile} />
        </Box>
      ) : (
        <>
          <Box sx={{ m: "auto", mt: "10px" }}>
            <img src={profile} alt="profile picture" />
          </Box>
          <Box sx={{ m: "auto", textAlign: "center", my: 3 }}>
            <span>Som</span>
            <br />
            <span sx={{ display: "block" }}>@sommykene</span>
            <br />
            <span sx={{ display: "block" }}>Go to Profile</span>
          </Box>
          <Box
            sx={{
              bgcolor: "#ffd62f",
              p: "10px",
              borderRadius: 3,
              width: "90%",
              m: "auto",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            1732 XP
          </Box>
        </>
      )}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "end",
        }}
      >
        <Box
          sx={{
            bgcolor: "#D9F1EF",
            width: "100%",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            <StyledLink to="/">
              <ListItem button key="Home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </StyledLink>
            <StyledLink to="learn">
              <ListItem button key="Learn">
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Learn" />
              </ListItem>
            </StyledLink>
            <StyledLink to="practice">
              <ListItem button key="Practice">
                <ListItemIcon>
                  <Games />
                </ListItemIcon>
                <ListItemText primary="Practice" />
              </ListItem>
            </StyledLink>
            <StyledLink to="vocabulary">
              <ListItem button key="Vocabulary">
                <ListItemIcon>
                  <Translate />
                </ListItemIcon>
                <ListItemText primary="Vocabulary" />
              </ListItem>
            </StyledLink>
            <StyledLink to="culture">
              <ListItem button key="Culture">
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText primary="Culture" />
              </ListItem>
            </StyledLink>
          </List>
          <List>
            <ListItem button key="Settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button key="Logout">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* close */}
      <Button
        size="large"
        sx={{
          display: "flex",
          justifyContent: open ? "flex-start" : "center",
        }}
        onClick={handleDrawerToggle}
      >
        {open ? (
          <ChevronLeftIcon sx={{ color: "black" }} />
        ) : (
          <ChevronRightIcon sx={{ color: "black" }} />
        )}
      </Button>
    </Drawer>
  );
}
