import styles from "./CallUs.module.css";

function CallUs() {
  return (
    <div className={styles.callUsBlock}>
      <p className={styles.callUsText}>Questions? Call Us</p>
      <a href="tel:1-800-385-4211" className={styles.callUsPhone}>
        1-800-385-4211
      </a>
    </div>
  );
}

export default CallUs;
