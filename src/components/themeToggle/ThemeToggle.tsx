"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  //checking ThemeContext don't return "undefined"
  const themeContext = useContext(ThemeContext);

  if (!themeContext || !themeContext.theme) {
    return null;
  }

  const { theme, toggle } = themeContext;

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14}></Image>
      <div
        className={styles.ball}
        style={{
          left: theme === "dark" ? 1 : undefined,
          right: theme === "dark" ? undefined : 1,
          background: theme === "dark" ? "#0f172a" : "white",
        }}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14}></Image>
    </div>
  );
};

export default ThemeToggle;
