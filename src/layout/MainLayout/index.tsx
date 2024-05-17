import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

import useMenuStore from "../../store/useMenuStore";

export default function MainLayout() {
  const { open } = useMenuStore();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        sx={(theme) => ({
          marginLeft: open ? "260px" : 0,
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
