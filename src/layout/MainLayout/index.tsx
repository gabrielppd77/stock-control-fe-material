import { Box, Theme, Toolbar, useMediaQuery } from "@mui/material";

import { Outlet } from "react-router-dom";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

import { drawerWidthOpen, drawerWidthClose } from "../../store/constants";

import useMenuStore from "@store/useMenuStore";

export default function MainLayout() {
  const { open } = useMenuStore();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const drawerWidth = isSmallScreen
    ? 0
    : open
    ? drawerWidthOpen
    : drawerWidthClose;

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
