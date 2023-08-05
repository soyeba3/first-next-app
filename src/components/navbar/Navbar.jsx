/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Soyeb's Next App
      </Link>
      <div className={styles.links}>
        <Link href={"/"}>Home</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
