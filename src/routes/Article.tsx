import { Grid } from "@mui/material";
import ArticleContainer from "../container/ArticleContainer";

export default function Article() {
  return (
    <Grid container>
      <Grid item xs={9}>
        <ArticleContainer />
      </Grid>
    </Grid>
  );
}