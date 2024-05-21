import {
  Box,
  Divider,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { AutoStories } from "@mui/icons-material";
import { Link } from "react-router-dom";

import SideItem from "./SideItem";

import { drawerWidth } from "../../../store/constants";
import menu from "../../../store/menu";

export default function Sidebar() {
  return (
    <Drawer open={true} variant="persistent">
      <Box
        sx={{
          bgcolor: "primary.dark",
          height: "100%",
          color: "primary.contrastText",
        }}
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
            <List disablePadding>
              <Stack gap={1}>
                {menu.map(({ title, icon, link }) => (
                  <SideItem key={link} title={title} icon={icon} link={link} />
                ))}
              </Stack>
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
