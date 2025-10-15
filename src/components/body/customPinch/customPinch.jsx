import styles from "./customPinch.module.css";

function CustomPinch() {
  return (
    <section className={styles.customPinchContainer}>
      {/* Left side - Image */}
      <div className={styles.pinchLeft}>
        <img
          src="/src/assets/images/categories/body/custom_pinch.jpg"
          alt="Custom Pinch Pleated Sheers"
        />
     </div>

     {/* Right side - Content */}
      <div className={styles.pinchRight}>
        <p className={styles.subtitle}>THE CURTAIN SHOP</p>
        <h2>Custom Pinch Pleated Sheers</h2>
        <button className={styles.exploreButton}>EXPLORE</button>
      </div>


    </section>
  );
}

export default CustomPinch;
