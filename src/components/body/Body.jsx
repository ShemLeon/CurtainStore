import styles from "./Body.module.css";
import PromoBanner from "./promoBanner/promoBanner";
import CustomPinch from "./customPinch/customPinch";
import Sale from "./sale/sale";

function Body() {
  return (
  <main className={styles.body}>
    <PromoBanner />
    <CustomPinch />
    <Sale />

  </main>
  )
}

export default Body;
