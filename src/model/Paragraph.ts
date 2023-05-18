import ArticleContent from "./ArticleContent";

export default interface Paragraph extends ArticleContent {
  content: string;
  translation: string;
}