import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ].map((current, index) => {
        return <ArticleCard />;
      })}
    </Box>
  );
}
