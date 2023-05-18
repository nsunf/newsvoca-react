import { Box, ButtonBase, Container, IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styled from "styled-components";
import Paragraph from "../model/Paragraph";
import Word from "../model/Word";
import { TranslaterState } from "../features/translaterSlice";

const CustomBox = styled.div<{ gutter?: boolean }>`
  width: 100%;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid black;
`;

function ButtonStack() {
  return (
    <Stack paddingBottom={1} direction="row" justifyContent="space-between">
      <IconButton>
        <VolumeUpIcon />
      </IconButton>
      <IconButton>
        <BookmarkBorderIcon />
      </IconButton>
    </Stack>
  );
}

function WordCard({ word }: { word: Word }) {
  return (
    <ListItem key={"word_" + word.id}>
      <CustomBox>
        <Typography>{word.text}</Typography>
        <Typography>{word.definition}</Typography>
        <ButtonStack />
      </CustomBox>
    </ListItem>
  );
}

function ParagraphCard({ paragraph }: { paragraph: Paragraph|null }) {
  if (paragraph === null)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", aspectRatio: "16/9" }}>
        <Typography color="text.secondary" textAlign="center">select paragraph or word</Typography>
      </Box>
    );
  else
    return (
      <>
        <CustomBox>
          <Typography marginBottom={2}>{paragraph?.content}</Typography>
          <ButtonStack />
        </CustomBox>
        <CustomBox>
          <Typography marginBottom={2}>{paragraph?.translation}</Typography>
        </CustomBox>
      </>
    );
}

interface TranslatePresenterProps {
  state: TranslaterState;
}

export default function TranslatePresenter(props: TranslatePresenterProps) {
  const { state } = props;
  return (
    <Container sx={{ position: "sticky", top: "80px", borderLeft: "1px solid black" }} maxWidth={false}>
      <Box>
        { state.paragraph !== null ? <ParagraphCard paragraph={state.paragraph} /> : null }
        { state.word !== null ? <WordCard word={state.word} /> : null }
      </Box>
      <List>
        {state.wordList.map(word => 
          <WordCard key={"word_" + word.id} word={word} />
          )}
      </List>
    </Container>
  );
}