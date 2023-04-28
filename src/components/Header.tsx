import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import CategoryContainer from "../container/CategoryContainer";
import HeaderProfileContainer from "../container/HeaderProfileContainer";

const HeaderBox = styled(AppBar)`
`;

export default function Header() {
  return (
    <AppBar position="sticky" color="secondary" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <CategoryContainer />
        <HeaderProfileContainer />
      </Toolbar>
    </AppBar>
  );
}