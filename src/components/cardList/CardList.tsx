import React from "react";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";
import Pagination from "../pagination/Pagination";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

interface Post {
  _id: string;
  page: number;
}

const getdata = async (page: number) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch page from CardList");
  }
  return res.json();
};

const CardList = async ({ page }: { page: number }) => {
  const { posts, count } = await getdata(page);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item: Post) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
