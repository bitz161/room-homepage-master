import "./mobile-navigation.styles.css";
import { ReactComponent as RoomLogo } from "../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";

const MNavigation = () => {
  const { setEnableSidebar } = useContext(SidebarContext);

  const handleSidebar = () => {
    setEnableSidebar(true);
  };

  return (
    <div className="mnavigation-container">
      <Hamburger onClick={handleSidebar} />
      <RoomLogo />
    </div>
  );
};

export default MNavigation;
