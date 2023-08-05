"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const login = () => {
  return <div className={poppins.className}>This is all about Login Page</div>;
};

export default login;
