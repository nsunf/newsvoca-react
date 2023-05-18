import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import ArticleContent from "../model/ArticleContent";
import ArticleDetail from "../model/ArticleDetail";
import ArticleImg from "../model/ArticleImg";
import Paragraph from "../model/Paragraph";
import { Fragment } from "react";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Title = ({ text }: { text: string }) =>
  <Box>
    <Typography
      fontSize="40px"
      fontWeight="bold"
      variant="h1"
      sx={{ marginBottom: 2}}
    >
      {text}
    </Typography>
    <Stack direction="row" justifyContent="end">
      <IconButton>
        <VolumeUpIcon />
      </IconButton>
      <IconButton>
        <BookmarkBorderIcon />
      </IconButton>
    </Stack>
  </Box>
;

const Info = ({ author, publishDate }: { author: string, publishDate: string }) => 
  <Stack marginBottom={2} direction="row" justifyContent="space-between">
    <Typography fontSize="13px">{author}</Typography>
    <Typography fontSize="13px">{publishDate}</Typography>
  </Stack>
;

const ImgContent = ({ img, clickHandler }: { img: ArticleImg, clickHandler: ClickHandler }) => {
  const { onClickParagraph, onClickWord } = clickHandler;
  return (
    <Card>
      <CardMedia 
        component="img"
        sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
        image={img.url}
        alt={img.caption}
      />
      {/* {img.caption ?
        <CardContent sx={{ padding: 0, paddingBottom: "0 !important"}}>
          <Typography
            sx={{
              cursor: "pointer",
              border: "1px solid transparent",
              transition: "500ms",
              ":hover": {
                color: "green",
                border: "1px solid #8a8a8a"
              }
            }}
            p="16px"
            fontSize="14px"
          >
            {img.caption.split(" ").map((word, i) =>
              <Fragment key={"caption_" + img.id + "_word_" + i}><span key={"article_img_caption_" + img.id}>{word}</span> </Fragment>
            )}
          </Typography>
        </CardContent>
        : null
      } */}
    </Card>
  );
};

const WordContent = ({ word, onClickWord }: { word: string, onClickWord: (str: string) => void }) => {
  return (
    <Fragment><span onContextMenu={e => { e.preventDefault(); onClickWord(word)}}>{word}</span> </Fragment>
  )
};

const ParagraphContent = ({ paragraph, clickHandler }: { paragraph: Paragraph, clickHandler: ClickHandler }) => {
  const { onClickParagraph, onClickWord } = clickHandler;

  return (
    <Box marginY={2}>
      <Typography
        sx={{
          cursor: "pointer",
          border: "1px solid transparent",
          borderRadius: 2 ,
          transition: "500ms",
          ":hover": {
            color: "green",
            border: "1px solid #8a8a8a"
          }
        }}
        padding="8px"
        onClick={() => onClickParagraph(paragraph)}
      >
        {paragraph.content.split(" ").map((word, i) =>
          <WordContent key={"paragraph_" + paragraph.id + "_word_" + i} word={word} onClickWord={onClickWord} />
          // <Fragment key={"paragraph_" + paragraph.id + "_word_" + i}><span onContextMenu={e => { e.preventDefault(); onClickWord(word)}}>{word}</span> </Fragment>
        )}
      </Typography>
    </Box>
  );
};

function Content({ articleContent, clickHandler }: { articleContent: ArticleContent, clickHandler: ClickHandler }) {
  if ("caption" in articleContent && "url" in articleContent) {
    return <ImgContent img={articleContent as ArticleImg} clickHandler={clickHandler} />
  } else if ("content" in articleContent) {
    return <ParagraphContent paragraph={articleContent as Paragraph} clickHandler={clickHandler} />;
  }

  return null;
}

interface ArticlePresenterProps {
  articleDetail: ArticleDetail;
  articleContents: ArticleContent[];
  
  clickHandler: ClickHandler;
}

interface ClickHandler {
  onClickParagraph: (p: Paragraph) => void;
  onClickWord: (str: string) => void;
}

export default function ArticlePresenter(props: ArticlePresenterProps) {
  const {
    articleDetail,
    articleContents,
    clickHandler
  } = props;

  return (
    <Container sx={{ paddingX: 2 }} maxWidth={false} disableGutters>
      <Title text={articleDetail.title} />
      <Info
        author={"By " + articleDetail.authorArr.join(", ")}
        publishDate={articleDetail.publishDate}
      />
      <Container disableGutters maxWidth={false}>
        {articleContents.map(content =>
          <Content
            key={"article_content_" + content.id}
            articleContent={content}
            clickHandler={clickHandler}
          />)}
      </Container>
    </Container>
  );
}