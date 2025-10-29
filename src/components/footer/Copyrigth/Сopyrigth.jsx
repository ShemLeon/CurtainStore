import styles from "./Copyrigth.module.css";

function Copyrigth() {
  return (
    <section className={styles.copyrigthContainer}>
      <article className={styles.footerBottom}>
        <p className={styles.copyright}>
          <small>Copyright © 2025 The Curtain Shop</small>
        </p>
        
        <figure className={styles.paymentIcons}>
          <img 
            src="/src/assets/images/footer/pay_row.png" 
            alt="Accepted payment methods: Visa, Mastercard, Discover, American Express, PayPal" 
          />
        </figure>
        
        <nav className={styles.footerLinks} aria-label="Legal information">
          <a href="#">Privacy Policy</a>
          <span className={styles.separator} aria-hidden="true">|</span>
          <a href="#">Terms and Conditions</a>
        </nav>
      </article>
    </section>
  );
}

export default Copyrigth;