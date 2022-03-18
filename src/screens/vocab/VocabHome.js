import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faQuoteLeft,
  faSpellCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import igboApiLogo from "@assets/images/igboapilogo.jpg";
import { Box } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "black",
  "&:hover": { color: "orange", cursor: "pointer" },
}));

const FaIcon = styled(FontAwesomeIcon)({
  fontSize: "5em",
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-evenly",
  "&:hover": { color: "orange", cursor: "pointer" },
}));

export default function VocabHome() {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ width: "100%", height: "50%" }}
    >
      <Item>
        <FaIcon icon={faBook} />
        <h1>All Lesson Vocab</h1>
      </Item>
      <Item>
        <StyledLink to="dictionary">
          <FaIcon icon={faSpellCheck} />
          <h1>Dictionary</h1>
          <Box>
            <span>Powered By</span>
            <br />
            <img
              src={igboApiLogo}
              width="60%"
              style={{ alignSelf: "center" }}
            />
          </Box>
        </StyledLink>
      </Item>
      <Item>
        <FaIcon icon={faQuoteLeft} />
        <h1>Phrasebooks</h1>
      </Item>
      <Outlet />
    </Stack>
  );
}
