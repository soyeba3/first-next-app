"use client";

import { Poppins } from "next/font/google";
import styles from "./login.module.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const login = () => {
  return (
    <div className={`${styles.container} ${poppins.className}`}>
      This is all about Login Page
    </div>
  );
};

export default login;
