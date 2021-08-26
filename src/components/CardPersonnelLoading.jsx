import React from "react";
import "./style/cardPersonnel.css";

const CardPersonnelLoading = (props) => {
  return (
    <div className="card-personnel-container loading ">
      <div className="top-container loading">
        <p className="text-5 loading shimmer"></p>
      </div>
      <div className="pic-container">
        <div className="pic-card-loading shimmer"></div>
      </div>
      <div className="bottom-container">
        <p className="text-4 loading shimmer"></p>
        <p className="text-4 loading shimmer"></p>
        <p className="text-4 loading shimmer"></p>
        <p className="text-4 loading shimmer"></p>
      </div>
    </div>
  );
};

export default CardPersonnelLoading;
