// import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ newImgs, openModal }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {newImgs.map((newImg) => (
          <li key={newImg.id}>
            <ImageCard newImg={newImg} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
