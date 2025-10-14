import styles from "./promoBanner.module.css";

function PromoBanner() {
  return (
    <section className={styles.promoContainer}>
      {/* // левая часть баннера */}
      <div className={styles.promoLeft}>
        <img
          src="/src/assets/images/categories/body/left_promo.jpg"
          alt="Interior Design"
        />
      </div>
      {/* // центральная часть баннера */}
      <div className={styles.promoCenter}>
        <h2 className={styles.promoTitle}>FREE SHIPPING ON ORDERS OVER $100</h2>
        <p className={styles.promoText}>
          Only Applicable Within The Continental United States. Not Applicable
          For Long Curtain Rods or for Shipments to the West Coast.
        </p>
        <p className={styles.promoText}>
          Use code: <strong>100FREE</strong>
        </p>
        <button className={styles.shopButton}>SHOP CURTAINS</button>
      </div>

      {/* // правая часть баннера */}
      <div className={styles.promoRight}>
        <img
          src="/src/assets/images/categories/body/right_promo.jpg"
          alt="Interior Design"
        />
      </div>
    </section>
  );
}

export default PromoBanner;
