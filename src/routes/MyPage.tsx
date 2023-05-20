import { Grid } from "@mui/material";
import MyPageSide from "../components/MyPageSide";
import { Route, Routes } from "react-router-dom";

import ScrabBookContainer from "../container/ScrabBookContainer";
import VocaContainer from "../container/VocaContainer";

export default function MyPage() {
  return (
    <Grid container>
      <Grid item xs={0} lg={2}>
        <MyPageSide />
      </Grid>
      <Grid item xs={12} lg={10}>
        <Routes>
          <Route path="/scrab-book" element={<ScrabBookContainer />}/>
          <Route path="/voca" element={<VocaContainer />}/>
        </Routes>
      </Grid>
    </Grid>
  );
}