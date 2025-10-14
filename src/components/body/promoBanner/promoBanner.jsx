import styles from "./promoBanner.module.css";

function PromoBanner() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoContainer}>
        <div className={styles.promoLeft}>
          <img src="/src/assets/images/categories/body/left_promo.jpg" alt="Interior Design" />
        </div>
        
        <div className={styles.promoCenter}>
          <div className={styles.promoBanner}>
            <h2 className={styles.promoTitle}>
              FREE SHIPPING ON<br />
              <span className={styles.promoHighlight}>ORDERS OVER $100</span>
            </h2>
            <p className={styles.promoText}>
              Only Applicable Within The Continental United States. Not Applicable For Long<br />
              Curtain Rods or for Shipments to the West Coast.
            </p>
            <span className={styles.promoCode}>Use code: <strong>100FREE</strong></span>
            <button className={styles.shopButton}>SHOP CURTAINS</button>
          </div>
        </div>
        
        <div className={styles.promoRight}>
          <img src="/src/assets/images/categories/body/right_promo.jpg" alt="Interior Design" />
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;