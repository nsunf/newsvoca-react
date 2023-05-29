import ArticlePresenter from "../presenter/ArticlePresenter";

import { uesAppSelector, useAppDispatch } from "../store";
import { selectParagraph, selectWord } from "../features/translaterSlice";

import articleDetailData from "../dummyData/articleDetailDto.json";

import ArticleDetail from "../model/ArticleDetail";
import Paragraph from "../model/Paragraph";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArticleContainer() {
  const params = useParams();
  const [articleDetail, setArticleDetail] = useState<ArticleDetail|null>(null);

  const dispatch = useAppDispatch();
  const translaterState = uesAppSelector(state => state.translater);

  const onClickParagraph = (p: Paragraph) => dispatch(selectParagraph(p));
  const onClickWord = (str: string) => dispatch(selectWord(str));

  useEffect(() => {
    if (params.id) {
      const articleId = parseInt(params.id);
      const filteredDetail = (articleDetailData as ArticleDetail[]).filter(detail => detail.id === articleId);
      if (filteredDetail.length > 0) setArticleDetail(filteredDetail[0]);
    }
  }, [params]);
  
  return (
    <ArticlePresenter 
      articleDetail={articleDetail}
      clickHandler={{ onClickParagraph, onClickWord }}
      translaterState={translaterState}
    />
  );
}