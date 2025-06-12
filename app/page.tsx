
'use client';

import { Component, useContext, useState } from "react";
import { AccountCredentials } from "./src/models/AccountCredentials";
import { UserInfo } from "./src/models/UserInfo";
import router from "next/router";
import { AuthContext, AuthProvider } from "./src/contexts/AuthContext";
import { AppProps } from "next/app";
import { AuthenticatedRoute } from "./src/layout/AuthenticatedRoute";

export default function Home({ Component, pageProps }: AppProps) {


  return (

              <Component { ...pageProps} />

  );
}
