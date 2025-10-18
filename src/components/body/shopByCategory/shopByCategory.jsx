import styles from "./shopByCategory.module.css";
import { saleItems } from "./shopByCategoryData";

function ShopByCategory() {
  return (
    <section className={styles.shopByCategoryContainer}>
      <div className={styles.shbRow}>
        {saleItems.map((item) => (
          <div
            key={item.id}
            className={styles.shbItem}
            style={{ backgroundImage: `url(${item.image})` }} 
          >   
          <img
          src="/src/assets/images/body/custom_pinch.jpg"
          alt="Custom Pinch Pleated Sheers"
        />       
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
