/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import contactImg from "public/contact.png";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contactImg} alt="" className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
