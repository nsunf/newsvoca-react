import { Grid } from "@mui/material";
import ArticleContainer from "../container/ArticleContainer";
import TranslateContainer from "../container/TranslateContainer";

export default function Article() {
  return (
    <Grid container>
      <Grid item xs={9}>
        <ArticleContainer />
      </Grid>
      <Grid item xs={3}>
        <TranslateContainer />
      </Grid>
    </Grid>
  );
}