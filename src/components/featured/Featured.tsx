import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Samiran here!</b>Discover my stories and creativity with Next-js
        13.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/pp1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere molestias fugiat iure, maxime laboriosam, autem dignissimos
            sequi eligendi omnis minima illum corporis numquam natus veritatis,
            rerum incidunt tempore quam?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
