import "./Header.css";
import MainHeader from "./mainHeader/MainHeader";
import TopBanner from "./topBanner/TopBanner";
import NavigationBar from "./navigationBar/NavigationBar";

function Header() {
  return (
    <header className="header">
      <TopBanner />
      <MainHeader />
      <NavigationBar />
    </header>
  );
}

export default Header;
