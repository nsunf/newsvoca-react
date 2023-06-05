import { useState } from "react";
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Link, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkedArticle from "../model/MarkedArticle";

interface ScrapArticleProps {
  // title: string;
  // thumbnail: string;
  // caption: string|null;
  // pubDate: string;
  // url: string;
  article: MarkedArticle;
  onDelete: (articleId: number) => void;
}

function ScrapArticle({ article, onDelete }: ScrapArticleProps) {
  const [anchor, setAnchor] = useState<HTMLElement|null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const onClickDelete = () => {
    setAnchor(null);
    onDelete(article.id);
  };

  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ position: "relative" }}>
        <CardActionArea>
          <Link component={RouterLink} to={article.url} underline="none" sx={{ display: "flex", flexDirection: "row", height: "144px" }}>
            <Box height="100%" sx={{ aspectRatio: "1/1" }}>
              <CardMedia
                sx={{ height: "100%", objectFit: "cover" }}
                component="img"
                image={article.repImg ?? ""}
                alt={article.repImgDesc ?? article.title + "_thumbnail"}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <Typography pr={4}>{article.title}</Typography>
              <Typography textAlign="end">{article.pubDate}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions sx={{ position: "absolute", top: "4px", right: "4px"}}>
          <IconButton onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={anchor !== null} onClose={handleClose}>
            <MenuItem onClick={onClickDelete}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" color="error"/>
              </ListItemIcon>
              <Typography color="error">삭제</Typography>
            </MenuItem>
          </Menu>
        </CardActions>
      </Card>
    </Grid>
  );
}

interface ScrapBookPresenterProps {
  articles: MarkedArticle[];
  onDelete: (articleId: number) => void;
}

export default function ScrapBookPresenter({ articles, onDelete }: ScrapBookPresenterProps) {
  return (
    <Grid container spacing={3} px={{ xs: 0, lg: 4}} my={2}>
      {articles.map((article, i) =>
        <ScrapArticle
          key={"scrap_" + i}
          article={article}
          // title={article.title}
          // thumbnail={article.repImg ?? ""}
          // caption={article.repImgDesc}
          // pubDate="YYYY/MM/DD"
          // url={article.url}
          onDelete={onDelete}
        />
      )}
    </Grid>
  );
}