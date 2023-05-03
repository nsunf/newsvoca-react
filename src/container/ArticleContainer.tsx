import ArticlePresenter from "../presenter/ArticlePresenter";

import ArticleDetail from "../model/ArticleDetail";
import ArticleContent from "../model/ArticleContent";

import articleDetailData from "../dummyData/articleDetailDto.json";
import articleContentsData from "../dummyData/articleContents.json";

const articleDetail: ArticleDetail = articleDetailData;
const articleContents: ArticleContent[] = articleContentsData;

export default function ArticleContainer() {
  
  return (
    <ArticlePresenter 
      articleDetail={articleDetail}
      articleContents={articleContents}
    />
  );
}