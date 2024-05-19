import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { AutoStories } from "@mui/icons-material";
import { Link } from "react-router-dom";

import SideItem from "./SideItem";

import { drawerWidth } from "../../../store/constants";
import menu from "../../../store/menu";

export default function Sidebar() {
  return (
    <Drawer open={true} variant="persistent">
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.primary.dark,
          height: "100%",
          color: theme.palette.primary.contrastText,
        })}
      >
        <Box
          sx={{
            width: drawerWidth + "px",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={(theme) => ({
                    display: "flex",
                    gap: 1,
                    color: theme.palette.primary.contrastText,
                  })}
                >
                  <AutoStories />
                  <Typography>Estoque</Typography>
                </Box>
              </Link>
            </Box>
          </Toolbar>
          <Divider color="gray" />
          <Box
            sx={{
              px: 2,
              py: 1,
            }}
          >
            <List
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {menu.map(({ title, icon, link }) => (
                <SideItem key={link} title={title} icon={icon} link={link} />
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
