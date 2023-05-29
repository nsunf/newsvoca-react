import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleListPresenter from "../presenter/ArticleListPresenter";

import Article from "../model/Article";
import Word from "../model/Word";
import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";

import categoryMajorListData from "../dummyData/categoryMajorList.json";
import categoryMinorListData from "../dummyData/categoryMinorList.json";
import articleData from "../dummyData/articleDtoList.json";
import wordRankData from "../dummyData/WordRank.json";

// const articleList: Article[] = articleData;
const categoryMajorList: CategoryMajor[] = categoryMajorListData;
const categoryMinorList: CategoryMinor[] = categoryMinorListData;
const wordRankList: Word[] = wordRankData;

export default function ArticleListContainer() {
  const [articleList, setArticleList] = useState<Article[]>([]);
  const params = useParams();

  useEffect(() => {
    let majorCat: CategoryMajor|undefined;
    let minorCat: CategoryMinor|undefined;

    if (params.minorCat) {
      const filtered = categoryMinorList.filter(c => c.pathname === params.minorCat);
      if (filtered.length > 0) {
        minorCat = filtered[0];
        majorCat = minorCat.categoryMajor;
      }
    } else if (params.majorCat) {
      const filtered = categoryMajorList.filter(c => c.pathname === params.majorCat);
      if (filtered.length > 0) majorCat = filtered[0];
    } else {
      majorCat = categoryMajorList[0];
    }

    console.log(majorCat);
    console.log(minorCat);
    setArticleList(articleData as Article[]);

  }, [params]);

  return (
    <ArticleListPresenter
      articleList={articleList}
      wordRankList={wordRankList}
    />
  );
}