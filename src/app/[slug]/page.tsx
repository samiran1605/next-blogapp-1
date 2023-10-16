import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/pp1.png" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Samiran</span>
              <span className={styles.date}>16-10-2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/pp1.png" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga
              sint aliquam ratione voluptate dicta maiores corporis eligendi
              obcaecati fugit, tenetur saepe maxime deserunt sequi doloribus
              quisquam vitae amet ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga
              sint aliquam ratione voluptate dicta maiores corporis eligendi
              obcaecati fugit, tenetur saepe maxime deserunt sequi doloribus
              quisquam vitae amet ab.
            </p>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga
              sint aliquam ratione voluptate dicta maiores corporis eligendi
              obcaecati fugit, tenetur saepe maxime deserunt sequi doloribus
              quisquam vitae amet ab.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga
              sint aliquam ratione voluptate dicta maiores corporis eligendi
              obcaecati fugit, tenetur saepe maxime deserunt sequi doloribus
              quisquam vitae amet ab.
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
