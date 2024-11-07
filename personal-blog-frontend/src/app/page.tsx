import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import ArticleCard from "@/components/ArticleCard";
import { ArticleDataType } from "@/interface/article";

export default async function Home() {
  let articles = {};
  try {
    const resp = await fetch("http://localhost:5000/article/all");
    articles = await resp.json();
  } catch (err) {
    console.log("no articles exists");
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {Object.values(articles).length > 0 ? (
        Object.values(articles).map((current, index) => {
          return <ArticleCard data={current as ArticleDataType} key={index} />;
        })
      ) : (
        <Typography>No articles founds!!!</Typography>
      )}
    </Box>
  );
}
