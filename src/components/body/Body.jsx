import styles from "./Body.module.css";
import PromoBanner from "./promoBanner/promoBanner";

function Body() {
  return (
  <main className={styles.body}>
    <PromoBanner />

  </main>
  )
}

export default Body;
