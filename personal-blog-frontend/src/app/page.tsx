import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import ArticleCard from "@/components/ArticleCard";
import articles from '../assets/articles.json'

export default function Home() {
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
      {articles.map((current, index) => {
        return <ArticleCard data={current} key={index} />;
      })}
    </Box>
  );
}
