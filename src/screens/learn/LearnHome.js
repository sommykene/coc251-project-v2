import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import lessonImg from "@assets/images/lessonImg.svg";
import { Avatar, Button } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOpen from "@mui/icons-material/LockOpen";
import Lock from "@mui/icons-material/Lock";
import DoneAll from "@mui/icons-material/DoneAll";
import { Done } from "@mui/icons-material";
import CourseInfo from "@components/CourseInfo";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import LessonAccordion from "./components/LessonAccordion";

import CurrentLessonBlock from "@components/CurrentLessonBlock";

const lessonData = [
  {
    title: "this is the title",
    subtitle: "this is the subtitle",
    objectives: ["learning 1", "learning 2"],
    stages: {
      lesson: true,
      review: true,
      locked: false,
    },
  },
  {
    title: "this is the title",
    subtitle: "this is the subtitle",
    objectives: ["learning 1", "learning 2"],
    stages: {
      lesson: true,
      review: false,
      locked: false,
    },
  },
  {
    title: "this is the title",
    subtitle: "this is the subtitle",
    objectives: ["learning 1", "learning 2"],
    stages: {
      lesson: false,
      review: false,
      locked: false,
    },
  },
  {
    title: "this is the title",
    subtitle: "this is the subtitle",
    objectives: ["learning 1", "learning 2"],
    stages: { locked: true },
  },
];
const Level = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: "20px",
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "300px",
}));

const MoreCoursesItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100px",
}));

export default function LearnHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Level>Level: Newcomer</Level>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={8}>
          <CurrentLessonBlock />
        </Grid>
        <Grid item xs={4}>
          <Item sx={{backgroundColor: "red"}}>xs=4</Item>
        </Grid>
      </Grid>
      {/* Extras */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h1>Introduction to ABChD</h1>
        <CourseInfo />
      </Box>

      <Box>
        <LessonAccordion data={lessonData} />
      </Box>

      {/*
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
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
                <Typography>Lesson 1</Typography>
                <Typography>
                  Wohin fahren wir? part 1 - completed lesson and review
                </Typography>
              </Box>
              <DoneAll sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box
                sx={{
                  bgcolor: "orange",
                  mr: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                View Vocab
              </Box>
              <Box
                sx={{
                  bgcolor: "pink",
                  ml: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                Review Lesson Again +5XP
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
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
              <Typography>
                Lesson 2: Wohin fahren wir? part 1 - Completed lesson not review
              </Typography>
              <Done sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box
                sx={{
                  bgcolor: "orange",
                  mr: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                View Vocab
              </Box>
              <Box
                sx={{
                  bgcolor: "#ffd62f",
                  ml: 1,
                  p: 1,
                  flex: 1,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                Review Lesson +10XP
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>
                Lesson 3: Wohin fahren wir? part 1 - not started lesson / no
                option to review yet
              </Typography>
              <LockOpen sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box
              sx={{
                bgcolor: "#ffd62f",
                mt: 2,
                p: 1,
                flex: 1,
                borderRadius: 1,
                textAlign: "center",
              }}
            >
              Start Lesson + 10XP
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>
                Lesson 4: Wohin fahren wir? part 1 - lesson locked / complete
                previous lesson
              </Typography>
              <Lock sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box
              sx={{
                bgcolor: "#bdbdbd",
                mt: 2,
                p: 1,
                flex: 1,
                borderRadius: 1,
                textAlign: "center",
              }}
            >
              Complete Previous Lesson
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography>Lesson 5: FINAL LESSON</Typography>
              <Lock sx={{ mx: 2 }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Where are we going?</Typography>
            <Typography>Here you'll learn:</Typography>
            <Typography>- the difference between wo and wohin</Typography>
            <Typography>- when to use fahren and gehen</Typography>
            <Box
              sx={{
                bgcolor: "#bdbdbd",
                mt: 2,
                p: 1,
                flex: 1,
                borderRadius: 1,
                textAlign: "center",
              }}
            >
              Complete Previous Lesson
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
            */}
      <Box sx={{ mt: 4 }}>
        <MoreCoursesItem>View More Courses</MoreCoursesItem>
      </Box>
    </Box>
  );
}
