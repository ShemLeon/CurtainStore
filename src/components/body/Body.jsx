import styles from "./Body.module.css";
import PromoBanner from "./promoBanner/promoBanner";
import CustomPinch from "./customPinch/customPinch";

function Body() {
  return (
  <main className={styles.body}>
    <PromoBanner />
    <CustomPinch />
  </main>
  )
}

export default Body;
