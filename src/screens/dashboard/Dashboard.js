import ContentContainer from "./layout/ContentContainer";
import Sidebar from "./layout/SideBar";
import { Box, CssBaseline } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <Sidebar />
      <ContentContainer />
    </Box>
  );
}
