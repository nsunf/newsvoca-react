import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Paragraph from "../model/Paragraph";
import Word from "../model/Word";

export interface TranslaterState {
  paragraph: Paragraph|null;
  word: Word|null;
  wordList: Word[];
}

const initialState: TranslaterState = {
  paragraph: null,
  word: null,
  wordList: []
};

const wordList: Word[] = [
  { id: 1, text: "Alpha", definition: "알파" },
  { id: 2, text: "Bravo", definition: "브라보" },
  { id: 3, text: "Charlie", definition: "찰리" },
  { id: 4, text: "Delta", definition: "델타" },
  { id: 5, text: "Echo", definition: "에코" }
];

export const selectParagraph = createAsyncThunk(
  "translate/paragraph",
  async (paragraph: Paragraph, thunkAPI) => {
    paragraph.translation = "선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다. 피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.";
    return paragraph;
  }
);

export const selectWord = createAsyncThunk(
  "translate/word",
  async (word: string, thunkAPI): Promise<Word> => {
    return { id: 111, text: word, definition: "뜻뜻뜻"};
  }
);

export const translaterSlice = createSlice({
  name: "translater",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(selectParagraph.pending, (_, action) => {
      console.log(action.meta);
    }).addCase(selectParagraph.fulfilled, (state, action) => {
      return {
        ...state,
        paragraph: { ...action.payload },
        word: null,
        wordList: wordList
      };
    }).addCase(selectParagraph.rejected, (_, action) => {
      console.log(action.error);
    });

    builder.addCase(selectWord.pending, (_, action) => {
      console.log(action.meta);
    }).addCase(selectWord.fulfilled, (state, action) => {
      return {
        word: { ...action.payload },
        paragraph: null,
        wordList: []
      };
    }).addCase(selectWord.rejected, (_, action) => {
      console.log(action.error);
    });
  }
});

export const { } = translaterSlice.actions;

export default translaterSlice.reducer;