import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpg"
              alt=""
              className={styles.image}
              width={32}
              height={32}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travels
            </span>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.details}>
              <span className={styles.username}>Samiran</span>
              <span className={styles.date}>12-10-2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
