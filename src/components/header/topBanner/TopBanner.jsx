import styles from "./TopBanner.module.css";

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <span className={styles.shippingMessage}>
        free shipping on orders over $100 with coupon
      </span>
    </div>
  );
}

export default TopBanner;
