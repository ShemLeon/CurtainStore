import "./Header.css";
import MainHeader from "./mainHeader/MainHeader";
import TopBanner from "./topBanner/TopBanner";

function Header() {
  return (
    <header className="header">
      <TopBanner />
      <MainHeader />

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
