import { Box, Collapse, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import FeedIcon from '@mui/icons-material/Feed';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import React, { useEffect, useState } from "react";
import PageItem from "./PageItem";
import SubPageItem from "./SubPageItem";


export default function MobileMyPageSide() {
  const [isOpen, setIsOpen] = useState(false);
  const [subListOpen, setSubListOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const location = useLocation();

  useEffect(() => {
    const splitted = location.pathname.split("/");

    if (splitted.length >= 3) {
      setSubListOpen(splitted[3] == "voca")
    } else {
      setSubListOpen(false);
    }
  }, [location.pathname])

  return (
    <Box display={{ xs: "block", lg: "none" }}>
      <IconButton onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <Box width="250px">
          <Box display="flex" justifyContent="end" p={1}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <PageItem text="스크랩북" to="/mypage/1/scrab-book" icon={<FeedIcon />} onClick={onClose}/>
            <PageItem text="단어장" to="/mypage/1/voca/words" icon={<BookIcon />} onClick={onClose}/>
            <Collapse in={subListOpen}>
              <List sx={{ pl: 5 }} disablePadding>
                <SubPageItem text="단어" to="/mypage/1/voca/words" onClick={onClose} />
                <SubPageItem text="문장" to="/mypage/1/voca/sentences" onClick={onClose} />
                <SubPageItem text="단어퀴즈" to="/mypage/1/voca/quiz" onClick={onClose} />
              </List>
            </Collapse>
          </List>
          <Divider />
          <List>
            <PageItem text="설정" to="/mypage/1/setting" icon={<SettingsIcon />} onClick={onClose}/>
            <PageItem text="개인정보수정" to="/mypage/1/edit" icon={<AssignmentIndIcon />} onClick={onClose}/>
            <PageItem text="고객센터" to="/mypage/1/service" icon={<SupportAgentIcon />} onClick={onClose}/>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}