import { useState } from "react";
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Link, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from "../components/SearchBox";

interface ScrabArticleProps {
  title: string;
  thumbnail: string;
  caption: string|null;
  pubDate: string;
  url: string;
}

function ScrabArticle({ title, thumbnail, caption, pubDate, url }: ScrabArticleProps) {
  const [anchor, setAnchor] = useState<HTMLElement|null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ position: "relative" }}>
        <CardActionArea>
          <Link component={RouterLink} to={url} underline="none" sx={{ display: "flex", flexDirection: "row", height: "144px" }}>
            <Box height="100%" sx={{ aspectRatio: "1/1" }}>
              <CardMedia
                sx={{ height: "100%", objectFit: "cover" }}
                component="img"
                image={thumbnail}
                alt={caption ?? title + "_thumbnail"}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <Typography pr={4}>{title}</Typography>
              <Typography textAlign="end">{pubDate}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions sx={{ position: "absolute", top: "4px", right: "4px"}}>
          <IconButton onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={anchor !== null} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
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

export default function ScrabBookPresenter() {
  return (
    <>
      <SearchBox />
      <Grid container spacing={3} px={{ xs: 0, lg: 4}} my={2}>
        {[...new Array(15)].map((_, i) =>
          <ScrabArticle
            key={"scrab_" + i}
            title="Teacher and security guard killed as boy allegedly opens fire at Serbian school"
            thumbnail="https://images.unsplash.com/photo-1585871746932-e133d3fedf4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1070&q=80"
            caption="A teacher and a security guard were killed when a boy allegedly opened fire in an elementary school in the Serbian capital Belgrade, the country’s government-owned news agency reported Wednesday."
            pubDate="2023/05/05"
            url="/article/1/world/test"
          />
        )}
      </Grid>
    </>
  );
}