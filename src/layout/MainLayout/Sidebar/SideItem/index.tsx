import { Icon, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface SideItemProps {
  icon: string;
  title: string;
  link: string;
}

export default function SideItem({ icon, title, link }: SideItemProps) {
  const { pathname } = useLocation();

  const isSelected = pathname == link;

  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
      }}
    >
      <ListItem
        sx={{
          borderRadius: 1,
          bgcolor: isSelected ? "primary.main" : "",
          transition: "background-color 0.3s ease",
          filter: isSelected ? "" : "brightness(70%)",
          color: "primary.contrastText",
        }}
        disableGutters
        disablePadding
      >
        <ListItemButton
          sx={{
            px: 2,
            py: 0.5,
            display: "flex",
            gap: 1,
          }}
          disableGutters
        >
          <Icon>{icon}</Icon>

          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
