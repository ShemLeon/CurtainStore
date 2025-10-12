import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="main-nav">
      <a href="#" className="nav-item">
        <span>Curtains & Shades</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="nav-item">
        <span>Valances</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="nav-item">
        <span>Curtain Rods</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="nav-item">
        <span>Bedding</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="nav-item">
        <span>Clearance</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <a href="#" className="nav-item">
        <span>Custom Pinch Pleated Sheers</span>
        <i className="fa fa-chevron-down"></i>
      </a>
    </nav>
  );
}
export default NavigationBar;
