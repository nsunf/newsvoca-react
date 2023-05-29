import { Box, Card, CardMedia, Container, IconButton, Stack, SxProps, Typography } from "@mui/material";
import ArticleContent from "../model/ArticleContent";
import ArticleDetail from "../model/ArticleDetail";
import ArticleImg from "../model/ArticleImg";
import Paragraph from "../model/Paragraph";
import React, { useCallback, useEffect, useState } from "react";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { TranslaterState } from "../features/translaterSlice";
import styled from "styled-components";

const WordTypo = styled.span<{ selected: boolean }>`
  transition: 500ms;
  color: ${({ selected }) => selected ? "red" : "inherit"};
  &::after {
    content: " ";
  }
`;

const ParagraphTypo = ({ selected, istitle, onClick, children }: { selected: boolean, istitle?: string, onClick: () => void, children: React.ReactNode }) =>
    <Typography
      sx={{
        cursor: "pointer",
        border: "1px solid transparent",
        borderRadius: "4px",
        color: selected ? "success.main" : "initial",
        p: istitle ? null : "8px",
        fontSize: istitle ? "40px" : null,
        fontWeight: istitle ? "bold" : null,
        mb: istitle ? "16px" : null,
        ":hover": {
          color: "success.main",
          border: "1px solid",
        }
      }}
      onClick={onClick}
    >
      {children}
    </Typography>
;

function Title({ paragraph, clickHandler, translaterState }: { paragraph: Paragraph, clickHandler: ClickHandler, translaterState: TranslaterState }) {
  return (
    <Box>
      <ParagraphContent paragraph={paragraph} clickHandler={clickHandler} translaterState={translaterState} />
      <Stack direction="row" justifyContent="end">
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
;

const Info = ({ author, publishDate }: { author: string, publishDate: string }) => 
  <Stack marginBottom={2} direction="row" justifyContent="space-between">
    <Typography fontSize="13px">{author}</Typography>
    <Typography fontSize="13px">{publishDate}</Typography>
  </Stack>
;

const ImgContent = ({ img }: { img: ArticleImg }) => {
  return (
    <Card>
      <CardMedia 
        component="img"
        sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
        image={img.url}
        alt={img.caption}
      />
    </Card>
  );
};

function WordContent ({ word, onClickWord, translaterState }: { word: string, onClickWord: (str: string) => void, translaterState: TranslaterState }) {
  const [ isSelected, setIsSelected ] = useState(false); 
  const [ flag, setFlag ] = useState(false);

  useEffect(() => {
    if (flag) setFlag(false);
    else setIsSelected(false);
  }, [translaterState]);

  const onClickWordHandler = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setFlag(true);
    setIsSelected(true);
    onClickWord(word);
  }, [onClickWord, word]);

  return (
    <WordTypo selected={isSelected} onContextMenu={onClickWordHandler}>{word}</WordTypo>
  )
};

function ParagraphContent({ paragraph, clickHandler, translaterState }: { paragraph: Paragraph, clickHandler: ClickHandler, translaterState: TranslaterState }) {
  const { onClickParagraph, onClickWord } = clickHandler;
  const [ isSelected, setIsSelected ] = useState(false);
  const [ flag, setFlag ] = useState(false);

  useEffect(() => {
    if (flag) setFlag(false);
    else setIsSelected(false);
  }, [translaterState]);

  const onClickParagraphHandler = useCallback(() => {
    setFlag(true);
    setIsSelected(true);
    onClickParagraph(paragraph);
  }, [onClickParagraph, paragraph]);

  return (
    <Box marginY={2}>
      <ParagraphTypo selected={isSelected} istitle={paragraph.titleYN === "Y" ? "istitle" : undefined} onClick={onClickParagraphHandler}>
        {paragraph.content.split(" ").map((word, i) =>
          <WordContent key={"paragraph_" + paragraph.id + "_word_" + i} word={word} onClickWord={onClickWord} translaterState={translaterState}/>
        )}
      </ParagraphTypo>
    </Box>
  );
};

function Content({ articleContent, clickHandler, translaterState }: { articleContent: ArticleContent, clickHandler: ClickHandler, translaterState: TranslaterState }) {
  if ("caption" in articleContent && "url" in articleContent) {
    return <ImgContent img={articleContent as ArticleImg} />
  } else if ("content" in articleContent) {
    return <ParagraphContent paragraph={articleContent as Paragraph} clickHandler={clickHandler} translaterState={translaterState} />;
  }

  return null;
}

interface ClickHandler {
  onClickParagraph: (p: Paragraph) => void;
  onClickWord: (str: string) => void;
}

interface ArticlePresenterProps {
  articleDetail: ArticleDetail|null;
  
  clickHandler: ClickHandler;
  translaterState: TranslaterState;
}

export default function ArticlePresenter(props: ArticlePresenterProps) {
  const {
    articleDetail,
    clickHandler,
    translaterState
  } = props;

  if (articleDetail === null) return null;

  return (
    <Container sx={{ paddingX: 2 }} maxWidth={false} disableGutters>
      <Title paragraph={articleDetail.title} clickHandler={clickHandler} translaterState={translaterState} />
      <Info
        author={"By " + articleDetail.authorArr.join(", ")}
        publishDate={articleDetail.publishDate}
      />
      <Container disableGutters maxWidth={false}>
        {articleDetail.contents.map(content =>
          <Content
            key={"article_content_" + content.id}
            articleContent={content}
            clickHandler={clickHandler}
            translaterState={translaterState}
          />)}
      </Container>
    </Container>
  );
}