import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./style/cardPersonnel.css";

const CardPersonnel = (props) => {
  return (
    <div
      className={`card-personnel-container ${
        props.fadeNext ? `fade-next` : `nt-fade-next`
      } ${props.fadePrev ? `fade-prev` : ``}`}
    >
      <div className="top-container">
        <p className="text-5">
          Personal ID: <span className="color-gadjian">{props.id}</span>
        </p>
        <FontAwesomeIcon icon={faEllipsisH} className="icon-dot" />
      </div>
      <div className="pic-and-detail-container">
        <div className="pic-container">
          <img src={props.pic} className="pic-card" alt="pic" />
        </div>
        <div className="bottom-container">
          <p className="text-3 name">Name</p>
          <p className="text-4 name">{props.name}</p>
          <p className="text-3 tlp">Telephone</p>
          <p className="text-4 tlp">{props.phone}</p>
          <p className="text-3 birth">Birthday</p>
          <p className="text-4 birth">{props.birth}</p>
          <p className="text-3 email">Email</p>
          <p className="text-4 email">
            {props.email.length > 28
              ? props.email.slice(0, 24) + ".."
              : props.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPersonnel;
