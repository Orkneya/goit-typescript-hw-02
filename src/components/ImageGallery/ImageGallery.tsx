// import React from "react";
import { Image } from "../../type/ImageData";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
type Props = {
  newImgs: Image[];
  openModal: (img: Image) => void;
};

const ImageGallery = ({ newImgs, openModal }: Props) => {
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
