import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Submit</button>
        </div>
      ) : (
        <Link href="/login">Login to write Comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/pp1.png"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Samiran</span>
              <span className={styles.date}>17-10-2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            voluptatum neque quas repellendus, necessitatibus sapiente facere
            ipsam! Quasi soluta numquam molestiae sapiente placeat culpa
            necessitatibus nulla alias id, aperiam iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
