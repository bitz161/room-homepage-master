import { createContext, useState } from "react";
import image1 from "../assets/images/desktop-image-hero-1.jpg";
import image2 from "../assets/images/desktop-image-hero-2.jpg";
import image3 from "../assets/images/desktop-image-hero-3.jpg";
import mobileImage1 from "../assets/images/mobile-image-hero-1.jpg";
import mobileImage2 from "../assets/images/mobile-image-hero-2.jpg";
import mobileImage3 from "../assets/images/mobile-image-hero-3.jpg";

export const ImagesContext = createContext({
  images: [],
  mobileImages: [],
});

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([image1, image2, image3]);
  const [mobileImages, setMobileImages] = useState([
    mobileImage1,
    mobileImage2,
    mobileImage3,
  ]);
  const value = { images, setImages, mobileImages, setMobileImages };
  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};
