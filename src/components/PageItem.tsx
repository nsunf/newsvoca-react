import { Link, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface PageItemProps {
  text: string;
  to: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function PageItem({ text, to, icon, onClick }: PageItemProps) {
  return (
    <ListItem>
      <Link component={RouterLink} to={to} underline="none" width="100%" height="100%" onClick={onClick}>
        <ListItemButton sx={{boxSizing: "content-box"}}>
          {icon ?
            <ListItemIcon>{icon}</ListItemIcon>
            : null
          }
          <Typography>{text}</Typography>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}