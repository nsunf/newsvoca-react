import { Box, ButtonBase, Container, IconButton, List, ListItem, Stack, Typography } from "@mui/material";

import styled from "styled-components";
import Paragraph from "../model/Paragraph";
import Word from "../model/Word";
import { TranslaterState } from "../features/translaterSlice";

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const CustomBox = styled.div<{ gutter?: boolean }>`
  width: 100%;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid black;
`;

function ButtonStack({ speak }: { speak: () => void }) {
  return (
    <Stack paddingBottom={1} direction="row" justifyContent="space-between">
      <IconButton onClick={() => speak()}>
        <VolumeUpIcon />
      </IconButton>
      <IconButton>
        <BookmarkBorderIcon />
      </IconButton>
    </Stack>
  );
}

function WordCard({ word, speak }: { word: Word, speak: (str: string) => void }) {
  return (
    <ListItem key={"word_" + word.id}>
      <CustomBox>
        <Typography>{word.text}</Typography>
        <Typography>{word.definition}</Typography>
        <ButtonStack speak={() => speak(word.text)} />
      </CustomBox>
    </ListItem>
  );
}

function ParagraphCard({ paragraph, speak }: { paragraph: Paragraph|null, speak: (str: string) => void }) {

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
          <ButtonStack speak={() => speak(paragraph.content)} />
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
  const speak = (str: string) => {
    // 음성 합성을 위한 인스턴스 생성
    const speechSynthesis = window.speechSynthesis;

    // SpeechSynthesisUtterance 인스턴스 생성
    const utterance = new SpeechSynthesisUtterance(str);
    
    // 언어 설정 (영어: en-US)
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.voice = speechSynthesis.getVoices()[0];
    
    // 음성 합성 실행
    speechSynthesis.speak(utterance);
  };
  return (
    <Container sx={{ position: "sticky", top: "80px", borderLeft: "1px solid black" }} maxWidth={false}>
      <Box>
        { state.paragraph !== null ? <ParagraphCard paragraph={state.paragraph} speak={speak} /> : null }
        { state.word !== null ? <WordCard word={state.word} speak={speak} /> : null }
      </Box>
      <List>
        {state.wordList.map(word => 
          <WordCard key={"word_" + word.id} word={word} speak={speak}/>
          )}
      </List>
    </Container>
  );
}