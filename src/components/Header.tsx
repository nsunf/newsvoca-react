import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import CategoryContainer from "../container/CategoryContainer";
import HeaderProfileContainer from "../container/HeaderProfileContainer";
import { Route, Routes } from "react-router-dom";
import MobileMyPageSide from "./MobileMyPageSide";

const HeaderBox = styled(AppBar)`
`;

export default function Header() {
  return (
    <AppBar position="sticky" color="secondary" sx={{ boxShadow: "none" }}>
      <Toolbar>
        <Routes>
          <Route path="/" element={<CategoryContainer />} />
          <Route path="/:majorCat" element={<CategoryContainer />} />
          <Route path="/:majorCat/:minorCat" element={<CategoryContainer />} />
          <Route path="/article/:id/:cat/:slug" element={<CategoryContainer />} />
        </Routes>
        <HeaderProfileContainer />
        <MobileMyPageSide />
      </Toolbar>
    </AppBar>
  );
}