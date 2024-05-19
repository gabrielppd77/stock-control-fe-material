import { AppBar, Divider, Toolbar } from "@mui/material";

import { drawerWidth } from "../../../store/constants";

export default function Appbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        bgcolor: "background.default",
      }}
    >
      <Toolbar></Toolbar>
      <Divider />
    </AppBar>
  );
}
