import "./sidebar.styles.css";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { motion, AnimatePresence } from "framer-motion";

const sideVariant = {
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  close: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: "-100%",
  },
};

const buttonVariant = {
  hover: {
    scale: 1.2,
    transition: {
      yoyo: Infinity,
    },
  },
};

const Sidebar = () => {
  const { enableSidebar, setEnableSidebar } = useContext(SidebarContext);
  const handleSidebar = () => {
    setEnableSidebar(false);
  };
  return (
    <AnimatePresence>
      {enableSidebar && (
        <motion.div
          className="sidebar-container"
          variants={sideVariant}
          initial="hidden"
          animate="open"
          exit="close"
          key="sidebar-container"
        >
          <CloseIcon onClick={handleSidebar} />
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
          >
            Home
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
          >
            Shop
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
          >
            About
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ yoyo: Infinity }}
          >
            Contact
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
