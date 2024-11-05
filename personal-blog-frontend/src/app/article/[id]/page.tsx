import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import articleData from '../../../assets/articles.json';
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const articleInfo = articleData.find(current => current.id === id);
  console.log("id is ", articleInfo)

  return (
    <Container maxWidth="md">
      {/* Article Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {articleInfo?.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
          By {articleInfo?.author} | {articleInfo?.date}
        </Typography>
      </Box>

      {/* Article Content */}
      <Box>
        <Typography variant="body1" component={"p"} sx={{ whiteSpace: 'pre-wrap' }}>
          {articleInfo?.content}
        </Typography>

      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Article Footer */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="caption" sx={{ color: "primary.main" }}>
          © 2024 by {articleInfo?.author}. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default page;
