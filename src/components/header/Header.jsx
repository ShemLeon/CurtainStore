import "./Header.css";
import MainHeader from "./mainHeader/MainHeader";
import TopBanner from "./topBanner/TopBanner";

function Header() {
  return (
    <header className="header">
      <TopBanner />
      {/* Main Header */}
      <MainHeader />
      <div className="main-header">
        <div className="search-box">
          <input type="text" placeholder="Search Products" />
          <button>🔍</button>
        </div>

        <div className="header-right">
          <span className="contact-label">Questions? Call Us</span>
          <a href="tel:1-800-385-4211">1-800-385-4211</a>
          <button className="cart-button">VIEW CART</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <a href="#">Curtains & Shades</a>
        <a href="#">Valances</a>
        <a href="#">Curtain Rods</a>
        <a href="#">Bedding</a>
        <a href="#">Clearance</a>
        <a href="#">Custom Pinch Pleated Sheers</a>
      </nav>
    </header>
  );
}

export default Header;
