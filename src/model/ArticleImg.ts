import ArticleContent from "./ArticleContent";

export default interface ArticleImg extends ArticleContent {
  caption: string;
  url: string;
}