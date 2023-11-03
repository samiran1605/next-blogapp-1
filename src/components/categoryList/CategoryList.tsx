import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

type CategoriesListType = {
  _id: string;
  slug: string;
  title: string;
  img: string;
};

const getdata = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch page from cardlist");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getdata();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item: CategoriesListType) => (
          <Link
            href="/Blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
