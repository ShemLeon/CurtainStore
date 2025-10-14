import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <nav className={styles.mainNav}>
      <a href="#" className="mavItem">
        <span>Curtains & Shades</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="mavItem">
        <span>Valances</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="mavItem">
        <span>Curtain Rods</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="mavItem">
        <span>Bedding</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="mavItem">
        <span>Clearance</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="mavItem">
        <span>Custom Pinch Pleated Sheers</span>
        <i className="fa fa-chevron-down"></i>
      </a>
    </nav>
  );
}
export default NavigationBar;
