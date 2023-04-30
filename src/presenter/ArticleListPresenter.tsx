import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Article from "../model/Article";
import { Link as RouterLink } from "react-router-dom";
import Word from "../model/Word";

function ArticleLarge({ article, size, hasThumbnail }: { article: Article, size: "large"|"small", hasThumbnail: boolean }) {
  if (size === "large")
    return (
      <ListItem>
        <Card sx={{ width: "100%", textDecoration: "none" }} component={RouterLink} to={article.url}>
          <CardActionArea>
            { hasThumbnail ? <CardMedia sx={{ height: 240 }} image={article.repImg} title={article.repImgDesc} />: null }
            <CardContent>
              <Typography fontSize="1.1rem" fontWeight="bold">{article.title}</Typography>
              <Typography variant="body2">{article.preview}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
    );
  else
    return (
      <ListItem>
        <Card sx={{ width: "100%", textDecoration: "none" }} component={RouterLink} to={article.url}>
          <CardActionArea sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia sx={{ height: 120, width: 120, flexShrink: 0, backgroundPosition: "center", backgroundsize: "cover", marginY: "40px" }} image={article.repImg} title={article.repImgDesc} />
            <CardContent>
              <Typography fontSize="1.1rem" fontWeight="bold">{article.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
    );
}

interface ArticleListProps {
  articleList: Article[];
  wordRankList: Word[];
}

export default function ArticleListPresenter(props: ArticleListProps) {
  const { articleList, wordRankList } = props;

  return (
    <Grid container>

      <Grid item xs={12} lg={8} xl={5} >
        <List>
        {
          articleList
            .filter((_, i) => i <= articleList.length/2)
            .map((article, i) => 
              <ArticleLarge
                key={"article_" + article.id}
                article={article}
                size="large"
                hasThumbnail={i === 0}
              />
            )
        }
        </List>
      </Grid>

      <Grid item xs={12} lg={4} xl={3}>
        <List>
        {
          articleList
            .filter((_, i) => i > articleList.length/2)
            .map(article =>
              <ArticleLarge
                key={"article_" + article.id}
                article={article}
                size="small"
                hasThumbnail={true}
              />
            )
        }
        </List>
      </Grid>

      <Grid item xs={4} sx={{ display: { xs: "none", xl: "flex" }, flexDirection: "column", gap: 8 }}>
        <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            sx={{ width: "50%", aspectRatio: "1/1" }}
            image="/illustration/bonbon-line-child-solving-rubiks-cube-1.png"
            title="quiz_img"
          />
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Button
              sx={{ fontWeight: "bold", borderRadius: "24px" }}
              variant="contained"
              size="large"
              component={RouterLink}
              to="/game"
              disableElevation
            >
              단어퀴즈
            </Button>
            <Typography paddingX="16px" align="center" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati quia unde fugiat distinctio sint asperiores pariatur laboriosam voluptatum laborum quibusdam.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6">단어 랭킹</Typography>
            <Typography variant="caption">가장 많이 저장된 단어 랭킹</Typography>
            <List sx={{ width: "70%" }}>
              {wordRankList.map((word, i) =>
                <>
                <ListItem key={"word_" + word.id} sx={{ padding: 0 }}>
                  <ListItemButton alignItems="center">
                    <ListItemText primary={i + 1 + ". " + word.text} />
                    <ListItemText sx={{ textAlign: "end" }} primary={word.definition} />
                  </ListItemButton>
                </ListItem>
                {i !== wordRankList.length - 1 ? <Divider /> : null}
                </>
              )}
            </List>
          </CardContent>
        </Card>
        <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CardMedia sx={{ flexBasis: "40%", aspectRatio: "1/1" }} image="/illustration/bonbon-line-study-of-various-literature-1.png" title="scrapbook_img"/>
          <CardContent>
            <Button
              sx={{ fontWeight: "bold", borderRadius: "24px" }}
              variant="contained"
              size="large"
              component={RouterLink}
              to="/scrapbook"
              disableElevation
            >
              단어장 바로가기
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}