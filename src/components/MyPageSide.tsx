import { Box, Collapse, Divider, List, Typography } from "@mui/material";
import PageItem from "./PageItem";
import SubPageItem from "./SubPageItem";

import FeedIcon from '@mui/icons-material/Feed';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MyPageSide() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const splitted = location.pathname.split("/");

    if (splitted.length >= 3) {
      setIsOpen(splitted[3] == "voca")
    } else {
      setIsOpen(false);
    }
  }, [location.pathname])

  return (
    <Box display={{ xs: "none", lg: "block" }} height="calc(100vh - 64px)" sx={{ position: "sticky", top: "64px", borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Box paddingY={2}>
        <Typography variant="h5" fontWeight="bold" paddingX={3}>MyPage</Typography>
      </Box>
      <List>
        <PageItem text="스크랩북" to="/mypage/1/scrab-book" icon={<FeedIcon/>} />
        <PageItem text="단어장" to="/mypage/1/voca/words" icon={<BookIcon />} />
        <Collapse in={isOpen}>
          <List sx={{ pl: 5 }} disablePadding>
            <SubPageItem text="단어" to="/mypage/1/voca/words" />
            <SubPageItem text="문장" to="/mypage/1/voca/sentences" />
            <SubPageItem text="단어퀴즈" to="/mypage/1/voca/quiz" />
          </List>
        </Collapse>
      </List>
      <Divider sx={{ marginRight: "16px" }} />
      <List>
        <PageItem text="설정" to="/mypage/1/setting" icon={<SettingsIcon />} />
        <PageItem text="개인정보수정" to="/mypage/1/edit" icon={<AssignmentIndIcon />} />
        <PageItem text="고객센터" to="/mypage/1/service" icon={<SupportAgentIcon />} />
      </List>
    </Box>
  );
}