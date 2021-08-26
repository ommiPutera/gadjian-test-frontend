import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style/buttonNextAndPrev.css";;

const ButtonNextAndPrev = ({ direction, move, file, disable }) => {
  return (
    <button
      onClick={move}
      className={
        direction === "next"
          ? `btn next next-${file}`
          : `btn next prev-${file}`
      }
      disabled={disable}
    >
      <div style={{ textAlign: "center" }}>
        {direction === "next" ? (
          <FontAwesomeIcon icon={faArrowLeft} />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} />
        )}
      </div>
    </button>
  );
};

export default ButtonNextAndPrev;
