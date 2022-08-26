import "./desktop-navigation.styles.css";
import { ReactComponent as RoomLogo } from "../../assets/images/logo.svg";
import { motion } from "framer-motion";
const DNavigation = () => {
  return (
    <div className="desktop-navigation-container">
      <RoomLogo className="page-logo" />
      <motion.div whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}>
        Home
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}>
        Shop
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}>
        About
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}>
        Contact
      </motion.div>
    </div>
  );
};

export default DNavigation;
