import { Route, Routes } from "react-router-dom";
import VocabHome from "@screens/vocab/VocabHome";
import Dictionary from "@screens/vocab/Dictionary";

export default function VocabRoutes() {
  return (
    <Routes>
      <Route index element={<VocabHome />} />
      <Route path="dictionary" element={<Dictionary />} />
    </Routes>
  );
}
