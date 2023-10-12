"use client";
import React, { createContext, ReactNode, useState, useEffect } from "react";

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || getBrowserTheme();
  }
};

const getBrowserTheme = () => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(mediaQuery.matches);
  return mediaQuery.matches ? "dark" : "light";
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme !== undefined) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", "defaultTheme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme ?? "defaultTheme", toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
