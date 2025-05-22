import { Image } from "../../type/ImageData";
import s from "./ImageCard.module.css";
type Props = {
  newImg: Image;
  openModal: (img: Image) => void;
};

const ImageCard = ({ newImg, openModal }: Props) => {
  return (
    <div>
      <img
        className={s.gallery_items}
        src={newImg.urls.small}
        alt={newImg.alt_description}
        onClick={() => openModal(newImg)}
      />
    </div>
  );
};

export default ImageCard;
