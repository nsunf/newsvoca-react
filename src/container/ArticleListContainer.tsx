import Article from "../model/Article";
import ArticleListPresenter from "../presenter/ArticleListPresenter";
import Word from "../model/Word";

import articleData from "../dummyData/articleDtoList.json";
import wordRankData from "../dummyData/WordRank.json";

const articleList: Article[] = articleData;
const wordRankList: Word[] = wordRankData;

export default function ArticleListContainer() {
  return (
    <ArticleListPresenter
      articleList={articleList}
      wordRankList={wordRankList}
    />
  );
}