import { Box, Button, Paper, styled, Typography } from "@mui/material";

import lessonImg from "@assets/images/lessonImg.svg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

const CurrentLessonBlock = () => {
  return (
    <Item
      sx={{
        bgcolor: "#fff",
        backgroundImage: `url(${lessonImg})`,
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        backgroundSize: "contain",
      }}
    >
      <Box
        sx={{
          textAlign: "right",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          height: "100%",
          alignItems: "align-center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <h1>Lesson 2: ABChD</h1>
          <h3>Intro to Abidịị</h3>
          <Typography>Where are we going?</Typography>
          <Typography>Here you'll learn:</Typography>
          <Typography>- the difference between wo and wohin</Typography>
          <Typography>- when to use fahren and gehen</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#ffd62f", color: "black" }}
          >
            Start Lesson
          </Button>
        </Box>
      </Box>
    </Item>
  );
};

export default CurrentLessonBlock;
