import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box, Button } from "@mui/material";

import profile from "@assets/images/profile.png";
import ActivityTimeline from "@components/ActivityTimeline";
import lessonImg from "@assets/images/lessonImg.svg";
import CurrentLessonBlock from "@components/CurrentLessonBlock";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

const FItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      {/* main */}
      <Grid container item spacing={2} md={12} lg={9}>
        <Grid item xs={9} sx={{ height: "50%" }}>
          <CurrentLessonBlock />
        </Grid>
        <Grid item xs={3} container sx={{ height: "50%" }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Item sx={{ bgcolor: "#d12e2e" }}></Item>
            </Grid>
            <Grid item xs>
              <Item sx={{ bgcolor: "#ff8801" }}></Item>
            </Grid>
            <Grid item xs>
              <Item sx={{ bgcolor: "#ffd62f" }}></Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} sx={{ height: "50%" }}>
          <Item sx={{ height: "100%", bgcolor: "#80b036" }}></Item>
        </Grid>
        <Grid item xs={5} container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Item sx={{ bgcolor: "#fff" }}></Item>
            </Grid>
            <Grid item xs>
              <Item
                sx={{
                  bgcolor: "#008751",
                  backgroundImage:
                    "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/146EB/production/_120519638_chloe_munday_photo.jpg)",
                  backgroundPosition: "center",
                }}
              >
                {/* <Img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/146EB/production/_120519638_chloe_munday_photo.jpg" /> */}
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* sidebar */}
      <Box
        component={Grid}
        container
        item
        xs
        lg={3}
        display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <h3 style={{ textAlign: "center" }}>My Activity</h3>
        <Grid xs container>
          <Grid item xs>
            <Item>
              <ActivityTimeline />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
