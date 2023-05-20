import { Link, ListItem, ListItemButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface SubPageItem {
  text: string;
  to: string;
  onClick?: () => void;
}

export default function SubPageItem({ text, to, onClick }: SubPageItem) {
  return (
    <ListItem disablePadding>
      <Link component={RouterLink} to={to} underline="none" width="100%" height="100%" onClick={onClick}>
        <ListItemButton sx={{ boxSizing: "content-box" }}>
          <Typography pl={5}>{text}</Typography>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}