import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed to fetch category");
  }

  return res.json();
};

type CategoriesListType = {
  _id: string;
  slug: string;
  title: string;
  img: string;
};

const CategoryList = async () => {
  const data: CategoriesListType[] = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
            key={item._id}
          >
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
