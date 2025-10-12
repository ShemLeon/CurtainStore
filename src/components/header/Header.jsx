import "./Header.css";
import CallUs from "./mainHeader/callUs/CallUs";
import Logo from "./mainHeader/logo/Logo";
import SearchBox from "./mainHeader/searchBox/SearchBox";
import ViewCart from "./mainHeader/viewCart/ViewCart";
import TopBanner from "./topBanner/TopBanner";

function Header() {
  return (
    <header className="header">
      {/* Top Banner */}
      <TopBanner />
      {/* Main Header */}
      <div className="main-header">
        <Logo />
        <SearchBox />
        <CallUs />
        <ViewCart />
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
