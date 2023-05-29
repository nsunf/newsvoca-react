import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, List, ListItem, ListItemButton, ListItemText, SxProps, Typography } from "@mui/material";

import Article from "../model/Article";
import Word from "../model/Word";

import NewspaperIcon from '@mui/icons-material/Newspaper';

function ArticleList({ article, size, hideThumbnail = false }: { article: Article, size: "large"|"small", hideThumbnail?: boolean }) {
  if (size === "large")
    return (
      <ListItem sx={{ paddingX: 1 }}>
        <Card sx={{ width: "100%", textDecoration: "none" }} component={RouterLink} to={article.url}>
          <CardActionArea>
            { article.repImg !== null && !hideThumbnail ?
              <CardMedia sx={{ height: 240 }} image={article.repImg} title={article.repImgDesc ?? ""} />
              :
              null
            }
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
      <ListItem sx={{ paddingX: 1}}>
        <Card sx={{ width: "100%", textDecoration: "none" }} component={RouterLink} to={article.url}>
          <CardActionArea sx={{ display: "flex", flexDirection: { xs: "row", sm: "column", xl: "row" }, alignItems: "center", justifyContent: "start" }}>
            {
              article.repImg !== null && !hideThumbnail ?
                <CardMedia sx={{ width: { xs: 120, sm: "100%", xl: 120 } , aspectRatio: { xs: "1/1", sm: "16/9", xl: "1/1" }, flexShrink: 0, marginY: 0 }} image={article.repImg} title={article.repImgDesc ?? ""} />
                : 
                <CardMedia sx={{ width: { xs: 120, sm: "100%", xl: 120 } , aspectRatio: { xs: "1/1", sm: "16/9", xl: "1/1" }, flexShrink: 0, marginY: 0 }}>
                  <NewspaperIcon sx={{ width: "100%", height: "100%", p: 2 }} color="secondary" />
                </CardMedia>
            }
            <CardContent sx={{ flexGrow: 1, padding: "8px 16px", height: { xs: 120, sm: "initial", xl: 120 } }}>
              <Typography fontSize="1.1rem" fontWeight="bold" sx={{ width: "100%", height: "100%", overflow: "hidden"  }}>{article.title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ListItem>
    );
}

function ExtraSection({ wordRankList, sx }: { wordRankList: Word[], sx?: SxProps }) {
  return (
    <List sx={sx}>
      <ListItem sx={{ paddingX: 1 }}>
        <Card sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            sx={{ width: "240px", aspectRatio: "1/1" }}
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
      </ListItem>
      <ListItem sx={{ paddingX: 1 }}>
        <Card sx={{ width: "100%" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
            <Typography variant="h6" align="center">단어 랭킹</Typography>
            <Typography variant="caption" align="center">가장 많이 저장된 단어 랭킹</Typography>
            <List>
              {wordRankList.map((word, i) =>
                <React.Fragment key={"word_" + word.id}>
                  <ListItem  sx={{ padding: 0 }}>
                    <ListItemButton alignItems="center">
                      <ListItemText primary={i + 1 + ". " + word.text} />
                      <ListItemText sx={{ textAlign: "end" }} primary={word.definition} />
                    </ListItemButton>
                  </ListItem>
                  {i !== wordRankList.length - 1 ? <Divider key={"divider_" + i} /> : null}
                </React.Fragment>
              )}
            </List>
          </CardContent>
        </Card>
      </ListItem>

      <ListItem sx={{ padding: 1 }}>
        <Card sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CardMedia sx={{ width: 240, aspectRatio: "1/1" }} image="/illustration/bonbon-line-study-of-various-literature-1.png" title="scrapbook_img"/>
          <CardContent>
            <Button
              sx={{ textAlign: "center", fontWeight: "bold", borderRadius: { xs: "50px", xl: "25px" }, wordBreak: "keep-all" }}
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
      </ListItem>
    </List>
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

      <Grid item xs={12} sm={8} xl={5} >
        <List>
        {
          articleList
            .filter((_, i) => i <= articleList.length/2)
            .map((article, i) => 
              <ArticleList
                key={"article_" + article.id}
                article={article}
                size="large"
                hideThumbnail={i !== 0}
              />
            )
        }
        </List>

        <ExtraSection wordRankList={wordRankList} sx={{ display: { xs: "block", xl: "none" } }} />
      </Grid>

      <Grid item xs={12} sm={4} xl={3}>
        <List>
        {
          articleList
            .filter((_, i) => i > articleList.length/2)
            .map(article =>
              <ArticleList
                key={"article_" + article.id}
                article={article}
                size="small"
              />
            )
        }
        </List>
      </Grid>

      <Grid item xs={12} xl={4} sx={{ display: { xs: "none", sm: "none", xl: "flex" }, flexDirection: "column", gap: 8 }}>
        <ExtraSection wordRankList={wordRankList} />
      </Grid>
    </Grid>
  );
}