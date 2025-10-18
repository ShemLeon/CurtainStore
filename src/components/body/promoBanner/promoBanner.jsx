import styles from "./promoBanner.module.css";
import leftPromoImg from "../../../assets/images/body/left_promo.jpg";
import rightPromoImg from "../../../assets/images/body/right_promo.jpg";

function PromoBanner() {
  return (
    <section className={styles.promoContainer}>
      {/* // Left Side Banner */}
      <div className={styles.promoLeft}>
        <img src={leftPromoImg} alt="Interior Design" />
      </div>
      {/* // Central Side Banner */}
      <div className={styles.promoCenter}>
        <h2>FREE SHIPPING ON ORDERS OVER $100</h2>
        <p>
          Only Applicable Within The Continental United States. Not Applicable
          For Long Curtain Rods or for Shipments to the West Coast.
        </p>
        <p>
          Use code: <strong>100FREE</strong>
        </p>
        <button className={styles.shopButton}>SHOP CURTAINS</button>
      </div>

      {/* // Right Side Banner */}
      <div className={styles.promoRight}>
        <img src={rightPromoImg} alt="Interior Design" />
      </div>
    </section>
  );
}

export default PromoBanner;
