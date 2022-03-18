import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import { DoneAll, LockOpen, Lock, Done, ExpandMore } from "@mui/icons-material";

import lessonImg from "@assets/images/lessonImg.svg";

const StageBox = styled(Box)(({ theme }) => ({
  marginRight: "8px",
  padding: "8px",
  flex: 1,
  borderRadius: "8px",
  textAlign: "center",
}));

const LessonAccordion = ({ data }) => {
  return (
    <Box>
      {data &&
        data.map((lesson, index) => {
          const { title, subtitle, objectives, stages } = lesson;
          console.log(objectives);
          console.log("hi");
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box sx={{ mr: 2 }}>
                  <Avatar
                    sx={{ border: "1px solid black" }}
                    alt="Remy Sharp"
                    src={lessonImg}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography>Lesson {index + 1}</Typography>
                    <Typography>{title}</Typography>
                  </Box>
                  <LessonIcons
                    lesson={stages.lesson}
                    review={stages.review}
                    locked={stages.locked}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{subtitle}</Typography>
                <Typography>Here you'll learn:</Typography>
                {objectives.map((objective) => {
                  return <Typography>- {objective}</Typography>;
                })}
                <Stages
                  lesson={stages.lesson}
                  review={stages.review}
                  locked={stages.locked}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
    </Box>
  );
};

const LessonIcons = ({ lesson, review, locked }) => {
  if (locked) {
    return <Lock sx={{ mx: 2 }} />;
  } else if (lesson && review) {
    return <DoneAll sx={{ mx: 2 }} />;
  } else if (lesson && !review) {
    return <Done sx={{ mx: 2 }} />;
  } else if (!lesson && !review) {
    return <LockOpen sx={{ mx: 2 }} />;
  }

  return <h1>hi</h1>;
};

const Stages = ({ lesson, review, locked }) => {
  if (locked) {
    return (
      <Box sx={{ display: "flex", mt: 2 }}>
        <StageBox sx={{ bgcolor: "#bdbdbd" }}>
          Complete Previous Lesson
        </StageBox>
      </Box>
    );
  } else if (lesson && review) {
    return (
      <Box sx={{ display: "flex", mt: 2 }}>
        <StageBox sx={{ bgcolor: "orange" }}>View Vocabs</StageBox>
        <StageBox sx={{ bgcolor: "pink" }}>Review Lesson Again +5XP</StageBox>
      </Box>
    );
  } else if (lesson && !review) {
    return (
      <Box sx={{ display: "flex", mt: 2 }}>
        <StageBox sx={{ bgcolor: "orange" }}>View Vocabs</StageBox>
        <StageBox sx={{ bgcolor: "#ffd62f" }}>Review Lesson +10XP</StageBox>
      </Box>
    );
  } else if (!lesson && !review) {
    return (
      <Box sx={{ display: "flex", mt: 2 }}>
        <StageBox sx={{ bgcolor: "#ffd62f" }}>Start Lesson + 20XP</StageBox>
      </Box>
    );
  }

  return <h1>hi</h1>;
};

export default LessonAccordion;
