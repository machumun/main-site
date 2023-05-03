import styles from "@styles/Footer.module.scss";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <>
      <footer className={styles.footer}>
        <img
          src="/logo-netlify.svg"
          alt="Netlify Logo"
          className={styles.logo}
        />
      </footer>
    </>
  );
};

export default Footer;
