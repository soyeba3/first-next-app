import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>Soyeb Next</div>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
