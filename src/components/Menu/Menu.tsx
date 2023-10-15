import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/menuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Editor's Pick</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <div className="border-4 border-solid border-slate-800 ">Border</div>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          coding
        </Link>
      </div>
      <h2 className={styles.subtitle}>Recent Updates</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
