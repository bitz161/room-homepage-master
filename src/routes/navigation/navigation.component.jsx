import { Fragment } from "react";
import DNavigation from "../../components/desktop-navigation/desktop-navigation.component";
import MNavigation from "../../components/mobile-navigation/mobile-navigation.component";
import { SidebarContext } from "../../context/sidebar.context";
import Sidebar from "../../components/sidebar/sidebar.component";
import { useContext } from "react";

const Navigation = () => {
  const { enableSidebar } = useContext(SidebarContext);
  return (
    <Fragment>
      <DNavigation />
      <MNavigation />
      <Sidebar />
    </Fragment>
  );
};

export default Navigation;
