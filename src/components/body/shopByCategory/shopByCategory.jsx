import styles from "./ShopByCategory.module.css";
import { sbcItems } from "./ShopByCategoryData";

function ShopByCategory() {
  return (
    <section className={styles.sbcContainer}>
      <h2 className={styles.h2}>Shop By Category</h2>

      <div className={styles.sbcRow}>
        {sbcItems.map((item) => (
          <div key={item.id} className={styles.sbcCard}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.sbcImage}
            />
            <h3 className={styles.sbcTitle}>{item.title}</h3>
            <ul className={styles.sbcList}>
              {item.items.map((listItem, index) => (
                <li key={index} className={styles.sbcListItem}>
                  {listItem}
                </li>
              ))}
            </ul>
            <button className={styles.sbcButton}>VIEW ALL</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
