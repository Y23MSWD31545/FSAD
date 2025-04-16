import React from "react";
import "../index.css";

function Card1({ top, bottom, end }) {
  return (
    <div style={{ color: "black" }} className="parcard">
      <div className="emement1">{top}</div>
      <div className="element2">{bottom}</div>
      <div className="element3">{end}</div>
    </div>
  );
}

export default Card1;
