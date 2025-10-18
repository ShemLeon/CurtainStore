import styles from "./sale.module.css";
import { saleItems } from "./saleData";

function Sale() {
  return (
    <section className={styles.saleContainer}>
      <div className={styles.saleGrid}>
        {saleItems.map((item) => (
          <div
            key={item.id}
            className={styles.saleItem}
            style={{ backgroundImage: `url(${item.image})` }}
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

export default Sale;
