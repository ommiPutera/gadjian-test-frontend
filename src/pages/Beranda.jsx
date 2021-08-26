import React from "react";
import Header from "../components/Header";
import "./style/beranda.css";

const Beranda = (props) => {
  return (
    <>
      <Header onCliCkBtn={props.onCliCkBtn} />
      <div className="container">
        <div className="beranda-container">
          <h1>Beranda</h1>
        </div>
      </div>
    </>
  );
};

export default Beranda;
