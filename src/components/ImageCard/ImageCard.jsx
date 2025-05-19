import s from "./ImageCard.module.css";

const ImageCard = ({ newImg, openModal }) => {
  return (
    <div>
      {/* <p>{newImg.alt_description}</p> */}
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
