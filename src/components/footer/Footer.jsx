import styles from "./Footer.module.css";
import Copyrigth from "./Copyrigth/Сopyrigth";
import OtherLinks from "./OtherLinks/OtherLinks";
import { FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <main className={styles.footer}>
      <OtherLinks />
      <Copyrigth />
    </main>
  );
}

export default Footer;
