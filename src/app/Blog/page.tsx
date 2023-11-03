import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

type catType = {
  culture: string;
  coding: string;
  food: string;
  style: string;
  travel: string;
  fashion: string;
};

const page = ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        {/*@ts-expect-error Async Server Component*/}
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
