import styles from "./Body.module.css";
import PromoBanner from "./promoBanner/PromoBanner";
import CustomPinch from "./customPinch/CustomPinch";
import Sale from "./sale/Sale";
import ShopByCategory from "./shopByCategory/ShopByCategory";

function Body() {
  return (
    <main className={styles.body}>
      <PromoBanner />
      <div className={styles.contentContainer}>
        <CustomPinch />
        <Sale />
        <ShopByCategory />
      </div>
    </main>
  );
}

export default Body;
