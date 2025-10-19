import styles from "./CustomPinch.module.css";
import customPinchImg from "../../../assets/images/body/custom_pinch.jpg";

function CustomPinch() {
  return (
    <section className={styles.customPinchContainer}>
      {/* Left side - Image */}
      <div className={styles.pinchLeft}>
        <img src={customPinchImg} alt="Custom Pinch Pleated Sheers" />
      </div>

      {/* Right side - Content */}
      <div className={styles.pinchRight}>
        <p className={styles.subtitle}>THE CURTAIN SHOP</p>
        <h2>
          Custom Pinch <br></br>Pleated Sheers
        </h2>
        <button className={styles.exploreButton}>EXPLORE</button>
      </div>
    </section>
  );
}

export default CustomPinch;
