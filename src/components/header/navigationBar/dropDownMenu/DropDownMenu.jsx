import { useState, useEffect } from 'react';
import styles from './DropdownMenu.module.css';

function DropdownMenu({ isOpen, content, onMouseEnter, onMouseLeave }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!content || !isVisible) return null;

  return (
    <div 
      className={`${styles.dropdownMenu} ${isOpen ? styles.open : styles.closing}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.dropdownContent}>
        {content.columns.map((column, idx) => (
          <div key={idx} className={styles.dropdownColumn}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <div className={styles.columnItems}>
              {column.items.map((item, itemIdx) => (
                <a 
                  key={itemIdx} 
                  href={item.link} 
                  className={styles.dropdownItem}
                >
                  {item.image && (
                    <img src={item.image} alt={item.name} />
                  )}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;