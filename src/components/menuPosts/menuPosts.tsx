import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Samiran</span>
            <span className={styles.date}> - 12-10-2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Samiran</span>
            <span className={styles.date}> - 12-10-2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Samiran</span>
            <span className={styles.date}> - 12-10-2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.code}`}>code</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Samiran</span>
            <span className={styles.date}> - 12-10-2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
