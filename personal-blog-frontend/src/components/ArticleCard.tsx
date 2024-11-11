"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArticleDataType } from "@/interface/article";

const ArticleCard: React.FC<{ data: ArticleDataType }> = ({ data }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        // rowGap: "4px",
        width: "245px",
        height: "185px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 16, fontWeight: 700 }}
        >
          {data.author}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            maxHeight: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2, // Adjust the number based on desired lines within 100px
            WebkitBoxOrient: "vertical",
            color: "text.primary",
          }}
        >
          {data.summary}
        </Typography>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 12, fontWeight: 400 }}
        >
          {data.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`article/${data.id}`}>
          Read More
        </Button>
        <Button size="small" onClick={() => {
          fetch(`http://localhost:5000/article/${data.id}`, {
            method: 'DELETE'
          }).then(() => {
            window.location.reload();
          })
        }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
