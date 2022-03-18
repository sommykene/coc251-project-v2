import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import Home from "@screens/main/Home";
import LearnHome from "@screens/learn/LearnHome";
import PracticeHome from "@screens/practice/PracticeHome";
import VocabHome from "@screens/vocab/VocabHome";
import CultureHome from "@screens/culture/CultureHome";

import VocabRoutes from "@routes/VocabRoutes";

export default function ContentContainer() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: "#E9EDF0",
      }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="learn" element={<LearnHome />} />
        <Route path="practice" element={<PracticeHome />} />
        <Route path="vocabulary/*" element={<VocabRoutes />} />
        <Route path="culture" element={<CultureHome />} />
      </Routes>
    </Box>
  );
}
