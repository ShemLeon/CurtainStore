import styles from "./OtherLinks.module.css";
import Logo from "../../header/mainHeader/logo/Logo";

function OtherLinks() {
  return (
    <section className={styles.otherLinksContainer}>

      <article className={styles.footerContent}>
        {/* Logo and Connect Section */}
        <aside className={styles.leftSection}>
          <Logo />
          <section className={styles.connectSection}>
            <h3>CONNECT WITH US!</h3>
            <nav className={styles.socialIcons} aria-label="Social media">
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                f
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                t
              </a>
            </nav>           
          </section>
        </aside>

        {/* Product Categories Navigation */}
        <nav className={styles.linkColumn} aria-label="Product categories">
          <h3>Product Categories</h3>
          <ul>
            <li>
              <a href="#">Curtains & shades</a>
            </li>
            <li>
              <a href="#">Valances</a>
            </li>
            <li>
              <a href="#">Curtain Rods</a>
            </li>
            <li>
              <a href="#">Bedding</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Clearance</a>
            </li>
          </ul>
        </nav>

        {/* Other Links Navigation */}
        <nav className={styles.linkColumn} aria-label="Additional links">
          <h3>Other Links</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Curtain Information</a>
            </li>
            <li>
              <a href="#">Curtain Sizing</a>
            </li>
            <li>
              <a href="#">Shipping and Return Policies</a>
            </li>
            <li>
              <a href="#">Coupons</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}

export default OtherLinks;