import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={s.loadBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
