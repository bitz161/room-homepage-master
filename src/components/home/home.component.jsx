import "./home.styles.css";
import { useContext, useState } from "react";
import { ImagesContext } from "../../context/images.context";
import { ProductsContext } from "../../context/content.context";
import { ReactComponent as PreviousIcon } from "../../assets/images/icon-angle-left.svg";
import { ReactComponent as NextIcon } from "../../assets/images/icon-angle-right.svg";
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";
const Home = () => {
  const { images, mobileImages } = useContext(ImagesContext);
  const { products } = useContext(ProductsContext);

  const [count, setCount] = useState(0);

  const handleNextContent = () => {
    if (count === 2) {
      return setCount(0);
    } else {
      return setCount(count + 1);
    }
  };

  const handlePreviousContent = () => {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="home-container">
      <img src={images[count]} alt="" key="1" className="home-image" />
      <img src={mobileImages[count]} alt="" key="1" className="home-image1" />
      <div className="home-inner-container">
        <div className="grid-1" />
        <div className="grid-2">
          <div className="name-value">{Object.values(products[count])[1]}</div>
          <div className="description-value">
            {Object.values(products[count])[2]}
          </div>
          <div className="shop-now">
            Show Now
            <Arrow className="arrow" />
          </div>
        </div>
        <div className="button-container grid-3">
          <div />
          <div className="button-inner-container">
            <div onClick={handlePreviousContent}>
              <PreviousIcon className="arrowIcon" />
            </div>
            <div onClick={handleNextContent}>
              <NextIcon className="arrowIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
