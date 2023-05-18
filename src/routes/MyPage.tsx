import { Grid } from "@mui/material";
import MyPageSide from "../components/MyPageSide";
import { Route, Routes } from "react-router-dom";
import ScrabBookContainer from "../container/ScrabBookContainer";

export default function MyPage() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <MyPageSide />
      </Grid>
      <Grid item xs={10}>
        <Routes>
          <Route path="/scrab-book" element={<ScrabBookContainer />}/>
        </Routes>
      </Grid>
    </Grid>
  );
}