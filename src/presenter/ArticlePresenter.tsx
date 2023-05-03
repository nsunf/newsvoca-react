import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import ArticleContent from "../model/ArticleContent";
import ArticleDetail from "../model/ArticleDetail";
import ArticleImg from "../model/ArticleImg";
import Paragraph from "../model/Paragraph";

function Content({ articleContent }: { articleContent: ArticleContent}) {
  if ("caption" in articleContent && "url" in articleContent) {
    const articleImg = articleContent as ArticleImg;

    return (
      <Card>
        <CardMedia 
          component="img"
          sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
          image={articleImg.url}
          alt={articleImg.caption}
        />
        <CardContent>
          <Typography>{articleImg.caption}</Typography>
        </CardContent>
      </Card>
    );
  } else if ("content" in articleContent) {
    const paragraph = articleContent as Paragraph;

    return (
      <Box>
        <Typography>{paragraph.content}</Typography>
      </Box>
    );
  }

  return null;
}

interface ArticlePresenterProps {
  articleDetail: ArticleDetail;
  articleContents: ArticleContent[];
}

export default function ArticlePresenter(props: ArticlePresenterProps) {
  const { articleDetail, articleContents } = props;

  return (
    <Container disableGutters>
      <Typography
        fontSize="32px"
        fontWeight="bold"
        variant="h1"
        sx={{ marginBottom: 2}}
      >
        {articleDetail.title}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize="13px">By {articleDetail.authorArr.join(", ")}</Typography>
        <Typography fontSize="13px">{articleDetail.publishDate}</Typography>
      </Stack>
      <Container disableGutters>
        {articleContents.map(content => <Content key={"article_content_" + content.id} articleContent={content} />)}
      </Container>
    </Container>
  );
}