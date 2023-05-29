import { AppBar, Toolbar } from "@mui/material";
import CategoryContainer from "../container/CategoryContainer";
import HeaderProfileContainer from "../container/HeaderProfileContainer";
import { Route, Routes } from "react-router-dom";
import MobileMyPageSide from "./MobileMyPageSide";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ boxShadow: "none", bgcolor: "common.white" }}>
      <Toolbar>
        <Routes>
          <Route path="/" element={<CategoryContainer />} />
          <Route path="/:majorCat" element={<CategoryContainer />} />
          <Route path="/:majorCat/:minorCat" element={<CategoryContainer />} />
          <Route path="/article/:id/:cat/:slug" element={<CategoryContainer />} />
          <Route path="/auth/*" element={null} />
        </Routes>
        <HeaderProfileContainer />
        <MobileMyPageSide />
      </Toolbar>
    </AppBar>
  );
}