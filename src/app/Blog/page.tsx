import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

const page = ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
