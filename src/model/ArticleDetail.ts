import ArticleContent from "./ArticleContent";
import Paragraph from "./Paragraph";

export default interface ArticleDetail {
  id: number;
  publishDate: string;
  authorArr: string[];
  view: number;
  title: Paragraph;
  contents: ArticleContent[];
}