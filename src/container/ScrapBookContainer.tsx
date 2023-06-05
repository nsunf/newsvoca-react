import { useCallback, useState } from "react";

import ScrapBookPresenter from "../presenter/ScrapBookPresenter";
import MarkedArticle from "../model/MarkedArticle";

import markedArticleListData from "../dummyData/markedArticleDtoList.json";
import SearchBox from "../components/SearchBox";

const markedArticleList = (markedArticleListData as MarkedArticle[]);

export default function ScrapBookContainer() {
  // 편집 모드
  const [articles, setArticles] = useState<MarkedArticle[]>(markedArticleList);

  const searchEvent = useCallback((str: string, sortMode: SortMode) => {
    let filteredArticles = markedArticleList
      .filter(article => article.title.toLowerCase().includes(str.toLowerCase()))
      .sort((lhs, rhs) => {
        switch (sortMode) {
          case "NAME_ASC":
            return lhs.title > rhs.title ? 1 : -1;
          case "NAME_DESC":
            return lhs.title < rhs.title ? 1 : -1;
          case "PUB_ASC":
            return new Date(lhs.pubDate) > new Date(rhs.pubDate) ? 1 : -1;
          case "PUB_DESC":
            return new Date(lhs.pubDate) < new Date(rhs.pubDate) ? 1 : -1;
          case "REG_ASC":
            return new Date(lhs.regDate) > new Date(rhs.regDate) ? 1 : -1;
          case "REG_DESC":
            return new Date(lhs.regDate) < new Date(rhs.regDate) ? 1 : -1;
          default :
          return 0;
        }
      })

    setArticles([...filteredArticles]);
  }, []);

  const onSort = useCallback((sortMode: SortMode) => {
    let sortedArticles = articles
      .sort((lhs, rhs) => {
        switch (sortMode) {
          case "NAME_ASC":
            return lhs.title > rhs.title ? 1 : -1;
          case "NAME_DESC":
            return lhs.title < rhs.title ? 1 : -1;
          case "PUB_ASC":
            return new Date(lhs.pubDate) > new Date(rhs.pubDate) ? 1 : -1;
          case "PUB_DESC":
            return new Date(lhs.pubDate) < new Date(rhs.pubDate) ? 1 : -1;
          case "REG_ASC":
            return new Date(lhs.regDate) > new Date(rhs.regDate) ? 1 : -1;
          case "REG_DESC":
            return new Date(lhs.regDate) < new Date(rhs.regDate) ? 1 : -1;
          default :
          return 0;
        }
      })
      setArticles([...sortedArticles]);
  }, [articles]);

  const onDelete = (articleId: number) => {
    console.log("delete article " + articleId);
  };

  return (
    <>
      <SearchBox searchEvent={searchEvent} onSort={onSort}/>
      <ScrapBookPresenter articles={articles} onDelete={onDelete}/>
    </>
  );
}