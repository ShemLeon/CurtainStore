import styles from "./sale.module.css";

function Sale() {
  const saleItems = [
    {
      id: 1,
      title: "ROD POCKETS\nCURTAINS",
      image: "/src/assets/images/categories/sale/image-1.png",
    },
    {
      id: 2,
      title: "GLASGOW",
      image: "/src/assets/images/categories/sale/image-2.png",
    },
    {
      id: 3,
      title: "SHEER\nVALANCES",
      image: "/src/assets/images/categories/sale/image-3.png",
    },
    {
      id: 4,
      title: "BLACK OUT\nCURTAINS",
      image: "/src/assets/images/categories/sale/image-4.png",
    },
    {
      id: 5,
      title: "SHAPED\nVALANCES",
      image: "/src/assets/images/categories/sale/image-5.png",
    },
    {
      id: 6,
      title: "PATIO DOORS\nCURTAINS",
      image: "/src/assets/images/categories/sale/image-6.png",
    },
    {
      id: 7,
      title: "GROMMET\nPANELS",
      image: "/src/assets/images/categories/sale/image-7.png",
    },
    {
      id: 8,
      title: "DECORATIVE\nCURTAIN\nRODS",
      image: "/src/assets/images/categories/sale/image-8.png",
    },
    {
      id: 9,
      title: "SCALLOPED",
      image: "/src/assets/images/categories/sale/image-9.png",
    },
    {
      id: 10,
      title: "SHEER\nVALANCE",
      image: "/src/assets/images/categories/sale/image-10.png",
    },
  ];
  return (
    <section className={styles.saleContainer}>
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

export default Sale;
