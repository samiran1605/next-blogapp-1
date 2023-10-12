import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          libero blanditiis vero incidunt, impedit voluptates voluptatum beatae.
          Accusantium odio ut inventore itaque provident, explicabo illo, beatae
          aspernatur ab, repudiandae molestiae.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
