import styles from "./shopByCategory.module.css";
import { saleItems } from "./shopByCategoryData";

function ShopByCategory() {
  return (
    <section className={styles.shopByCategoryContainer}>
      <div className={styles.saleGrid}>
        {saleItems.map((item) => (
          <div
            key={item.id}
            className={styles.saleItem}
            style={{ backgroundImage: `url(${item.image})` }} /* ДОБАВИТЬ */
          >
            {/* УДАЛИТЬ тег <img> полностью */}
            <div className={styles.textOverlay}>
              <h3>{item.title}</h3>
              <p className={styles.saleText}>SALE UPTO 30% OFF</p>
              <button className={styles.shopButton}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
