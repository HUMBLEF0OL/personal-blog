import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const ArticleCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        // rowGap: "4px",
        width: "256px",
        height: "240px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 16, fontWeight: 700 }}
        >
          Author
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            maxHeight: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4, // Adjust the number based on desired lines within 100px
            WebkitBoxOrient: "vertical",
            color: "text.primary",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          quo eos sed temporibus, placeat ratione voluptatibus architecto illo!
          Magni eaque ipsam facere tempore atque accusantium sapiente ratione
          velit tempora!
        </Typography>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 12, fontWeight: 400 }}
        >
          04-11-2024
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Box>
  );
};

export default ArticleCard;
