import styles from "./NavigationBar.module.css";
import { useDropdown } from "./dropDownMenu/viewModels/useDropDown";
import { navItemsData } from "./dropDownMenu/models/dropdownData";
import NavItem from "./components/NavItem";

function NavigationBar() {
  const { openDropdown, handleMouseEnter, handleMouseLeave, isDropdownOpen } =
    useDropdown();

  return (
    <nav className={styles.mainNav}>
      {navItemsData.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          isDropdownOpen={isDropdownOpen(item.name)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </nav>
  );
}

export default NavigationBar;
