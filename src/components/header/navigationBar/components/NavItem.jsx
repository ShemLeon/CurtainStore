import './NavItem.css';
import DropdownMenu from '../dropDownMenu/DropDownMenu';
import { curtainsDropdownData } from '../dropDownMenu/models/dropdownData';

function NavItem({ item, isDropdownOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className="navItemWrapper"
      onMouseEnter={() => item.hasDropdown && onMouseEnter(item.name)}
      onMouseLeave={onMouseLeave}
    >
      <a href={item.href} className="navItem">
        <span>{item.name}</span>
        {item.hasDropdown && <i className="fa fa-chevron-down"></i>}
      </a>
      {item.hasDropdown && isDropdownOpen && (
        <DropdownMenu
          isOpen={isDropdownOpen}
          content={curtainsDropdownData}
          onMouseEnter={() => onMouseEnter(item.name)}
          onMouseLeave={onMouseLeave}
        />
      )}
    </div>
  );
}

export default NavItem;