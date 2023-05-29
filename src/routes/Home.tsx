import { Route, Routes } from "react-router-dom";
import ArticleListContainer from "../container/ArticleListContainer";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<ArticleListContainer/>} />
      <Route path="/:majorCat" element={<ArticleListContainer/>} />
      <Route path="/:majorCat/:minorCat" element={<ArticleListContainer/>} />
    </Routes>
  );
}