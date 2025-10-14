import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo} role="img" aria-label="The Curtain Shop">
      <span className={styles.logoThe}>the</span>
      <span className={styles.logoC}>C</span>
      <span className={styles.logoUrtain}>urtain</span>
      <span className={styles.logoShop}>shop</span>
    </div>
  );
}

export default Logo;
