import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
const page = () => {
  return (
    <Container maxWidth="md">
      {/* Article Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Article Title
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
          By Author Name | October 31, 2024
        </Typography>
      </Box>

      {/* Article Content */}
      <Box>
        <Typography variant="body1" component={"p"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          arcu eget nisl efficitur, at suscipit mauris congue. Sed eget eros
          urna. Phasellus suscipit euismod sem in lacinia.
        </Typography>
        <Typography variant="body1" component={"p"}>
          Morbi consequat risus nec feugiat interdum. Duis malesuada, ex id
          hendrerit fringilla, libero massa faucibus dui, et pretium nunc velit
          sed justo. Curabitur consectetur libero eget erat fermentum
          scelerisque.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Article Footer */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="caption" sx={{ color: "primary.main" }}>
          © 2024 by Author Name. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default page;
