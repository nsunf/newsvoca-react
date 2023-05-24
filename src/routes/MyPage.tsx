import { Grid } from "@mui/material";
import MyPageSide from "../components/MyPageSide";
import { Route, Routes } from "react-router-dom";

import ScrabBookContainer from "../container/ScrabBookContainer";
import VocaContainer from "../container/VocaContainer";
import SentenceContainer from "../container/SentenceContainer";
import SettingContainer from "../container/SettingContainer";
import EditProfileContainer from "../container/EditProfileContainer";

export default function MyPage() {
  return (
    <Grid container>
      <Grid item xs={0} lg={2}>
        <MyPageSide />
      </Grid>
      <Grid item xs={12} lg={10}>
        <Routes>
          <Route path="/scrab-book" element={<ScrabBookContainer />}/>
          <Route path="/voca/words" element={<VocaContainer />}/>
          <Route path="/voca/sentences" element={<SentenceContainer />}/>
          <Route path="/setting" element={<SettingContainer />}/>
          <Route path="/edit" element={<EditProfileContainer />}/>
        </Routes>
      </Grid>
    </Grid>
  );
}