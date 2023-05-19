import { Box, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function PageItem({ text, to, onClick }: { text: string, to: string, onClick: () => void }) {
  return (
    <ListItem disablePadding>
      <Link component={RouterLink} to={to} underline="none" width="100%" onClick={onClick}>
        <ListItemButton>{text}</ListItemButton>
      </Link>
    </ListItem>
  );
}

export default function MobileMyPageSide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display={{ xs: "block", lg: "none" }}>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width="250px">
          <Box display="flex" justifyContent="end" p={1}>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <PageItem text="스크랩북" to="/mypage/1/scrab-book" onClick={() => setIsOpen(false)}/>
            <PageItem text="단어장" to="/mypage/1/voca" onClick={() => setIsOpen(false)}/>
          </List>
          <Divider />
          <List>
            <PageItem text="설정" to="/mypage/1/setting" onClick={() => setIsOpen(false)}/>
            <PageItem text="개인정보수정" to="/mypage/1/edit" onClick={() => setIsOpen(false)}/>
            <PageItem text="고객센터" to="/mypage/1/service" onClick={() => setIsOpen(false)}/>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}