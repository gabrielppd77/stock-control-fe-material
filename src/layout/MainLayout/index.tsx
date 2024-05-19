import { Box, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

import { drawerWidth } from "../../store/constants";

export default function MainLayout() {
  return (
    <Box>
      <Appbar />
      <Sidebar />
      <Box
        sx={(theme) => ({
          marginLeft: drawerWidth + "px",
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        })}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
