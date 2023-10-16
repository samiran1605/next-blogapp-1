import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";

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
    </div>
  );
};

export default Comments;
