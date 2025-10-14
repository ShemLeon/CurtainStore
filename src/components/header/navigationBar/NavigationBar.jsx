import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const navItems = [
    { name: "Curtains & Shades", href: "/curtains" },
    { name: "Valances", href: "/valances" },
    { name: "Curtain Rods", href: "/rods" },
    { name: "Bedding", href: "/bedding" },
    { name: "Clearance", href: "/clearance" },
    { name: "Custom Pinch Pleated Sheers", href: "/custom" },
  ];

  return (
    <nav className={styles.mainNav}>
      {navItems.map((item) => (
        <a key={item.name} href={item.href} className={styles.navItem}>
          <span>{item.name}</span>
          <i className="fa fa-chevron-down"></i>
        </a>
      ))}
    </nav>
  );
}

export default NavigationBar;
