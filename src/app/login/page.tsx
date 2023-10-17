import React from "react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.socialButton} ${styles.google}`}>
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
