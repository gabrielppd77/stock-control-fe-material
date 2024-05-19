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
        sx={(theme) => ({
          borderRadius: 1,
          bgcolor: isSelected ? theme.palette.primary.main : "",
          transition: "background-color 0.3s ease",
          filter: isSelected ? "" : "brightness(70%)",
          color: theme.palette.primary.contrastText,
        })}
        disableGutters
        disablePadding
      >
        <ListItemButton
          sx={{ px: 2, py: 0.5, display: "flex", gap: 1 }}
          disableGutters
        >
          <Icon fontSize="small">{icon}</Icon>

          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
