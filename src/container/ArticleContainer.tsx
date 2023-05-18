import ArticlePresenter from "../presenter/ArticlePresenter";

import ArticleDetail from "../model/ArticleDetail";
import ArticleContent from "../model/ArticleContent";

import articleDetailData from "../dummyData/articleDetailDto.json";
import articleContentsData from "../dummyData/articleContents.json";
import { useAppDispatch } from "../store";
import { selectParagraph, selectWord } from "../features/translaterSlice";
import { useCallback } from "react";
import Paragraph from "../model/Paragraph";



const articleDetail: ArticleDetail = articleDetailData;
const articleContents: ArticleContent[] = articleContentsData;

export default function ArticleContainer() {
  const dispatch = useAppDispatch();

  const onClickParagraph = useCallback((p: Paragraph) => {
    dispatch(selectParagraph(p));
  }, [dispatch]);

  const onClickWord = useCallback((str: string) => {
    dispatch(selectWord(str));
  }, [dispatch]);
  
  return (
    <ArticlePresenter 
      articleDetail={articleDetail}
      articleContents={articleContents}
      clickHandler={{ onClickParagraph, onClickWord }}
    />
  );
}