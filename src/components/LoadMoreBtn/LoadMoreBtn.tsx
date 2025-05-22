import React from "react";
import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={s.loadBtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
