import { AppBar, Grid, Toolbar } from "@mui/material";
import styled from "styled-components";
import CategoryContainer from "../container/CategoryContainer";

const HeaderBox = styled(AppBar)`
`;

export default function Header() {
  return (
    // <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: "none" }}>
    <AppBar position="sticky" color="secondary" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <CategoryContainer />
        {/* login signup */}
        {/* profile */}
      </Toolbar>
    </AppBar>
  );
}