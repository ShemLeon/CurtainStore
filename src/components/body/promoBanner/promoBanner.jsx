import styles from "./promoBanner.module.css";

function PromoBanner() {
  return (
      <section className={styles.promoBanner}>
        <div className={styles.promoContent}>
          <h2>FREE SHIPPING ON ORDERS OVER $100</h2>
          <p>Only Applicable Within The Continental United States. Not Applicable For Long Curtain Rods or for Shipments to the West Coast.</p>
          <span className={styles.promoCode}>Use code: 100FREE</span>
        </div>
      </section>
  );
}

export default PromoBanner;