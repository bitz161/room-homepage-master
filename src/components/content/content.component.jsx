import "./content.styles.css";
import AboutDark from "../../assets/images/image-about-dark.jpg";
import AboutLight from "../../assets/images/image-about-light.jpg";

const Content = () => {
  return (
    <div className="content-container">
      <img src={AboutDark} alt="" className="content-grid-1" />
      <div className="content-grid-2">
        <div>About our furniture</div>
        <div>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </div>
      </div>
      <img src={AboutLight} alt="" className="content-grid-3" />
    </div>
  );
};

export default Content;
