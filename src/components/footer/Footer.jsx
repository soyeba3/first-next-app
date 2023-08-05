import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Soyeb Next. All rights reserved</div>
      <div className={styles.social}>
        <Image width={15} height={15} src="/1.png" alt="social_icon" className={styles.icon} />
        <Image width={15} height={15} src="/2.png" alt="social_icon" className={styles.icon} />
        <Image width={15} height={15} src="/3.png" alt="social_icon" className={styles.icon} />
        <Image width={15} height={15} src="/4.png" alt="social_icon" className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
