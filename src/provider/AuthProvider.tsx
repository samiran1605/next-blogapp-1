"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type AuthSessionProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthSessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
