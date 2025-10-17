import styles from "./Body.module.css";
import PromoBanner from "./promoBanner/promoBanner";
import CustomPinch from "./customPinch/customPinch";
import Sale from "./sale/sale";

function Body() {
  return (
    <main className={styles.body}>
      <PromoBanner />
      <div className={styles.contentContainer}>
        <CustomPinch />
        <Sale />
      </div>
    </main>
  );
}

export default Body;
