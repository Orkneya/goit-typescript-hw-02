import React from "react";
import Modal from "react-modal";
import { Image } from "../../type/ImageData";
type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
};

const ImageModal = ({ isOpen, onRequestClose, image }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true} // Закрыть при клике вне
      shouldCloseOnEsc={true} // Закрыть по Esc
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          maxWidth: "70%",
          maxHeight: "70%",
          margin: "auto",
          padding: 0,
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      contentLabel="Image Modal"
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Selected image"}
          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
