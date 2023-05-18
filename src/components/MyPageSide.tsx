import { Box, Divider, Link, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; 

function PageItem({ text, to }: { text: string, to: string }) {
  return (
    <ListItem>
      <Link component={RouterLink} to={to} underline="none" width="100%" height="100%">
        <ListItemButton sx={{boxSizing: "content-box"}}>
          {text}
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

export default function MyPageSide() {
  return (
    <Box sx={{ position: "sticky", top: 0, height: "100vh", borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Box paddingY={2}>
        <Typography variant="h5" fontWeight="bold" paddingX={3}>MyPage</Typography>
      </Box>
      <List>
        <PageItem text="스크랩북" to="/mypage/1/scrab-book" />
        <PageItem text="단어장" to="/mypage/1/voca" />
      </List>
      <Divider sx={{ marginRight: "16px" }} />
      <List>
        <PageItem text="설정" to="/mypage/1/setting" />
        <PageItem text="개인정보수정" to="/mypage/1/edit" />
        <PageItem text="고객센터" to="/mypage/1/service" />
      </List>
    </Box>
  );
}