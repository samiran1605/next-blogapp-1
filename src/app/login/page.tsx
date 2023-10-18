"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.socialButton} ${styles.google}`}
          onClick={() => signIn("google")}
        >
          Sign-In with Google
        </div>
        <div className={`${styles.socialButton} ${styles.github}`}>
          Sign-In with Github
        </div>
        <div className={`${styles.socialButton} ${styles.facebook}`}>
          Sign-In with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
