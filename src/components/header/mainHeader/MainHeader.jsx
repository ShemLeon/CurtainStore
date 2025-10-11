import "./MainHeader.css";
import CallUs from "./callUs/CallUs";
import Logo from "./logo/Logo";
import SearchBox from "./searchBox/SearchBox";
import ViewCart from "./viewCart/ViewCart";

function MainHeader() {
  return (
    <div className="main-header">
      <Logo />
      <SearchBox />
      <CallUs />
      <ViewCart />
    </div>
  );
}

export default MainHeader;
