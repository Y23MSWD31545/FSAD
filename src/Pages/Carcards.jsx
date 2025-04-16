import React from "react";
import "../componens/Buyacar.css";

function Carcards({
  one,
  two,
  three,
  four1,
  four2,
  four3,
  five1,
  five2,
  five3,
  six1,
  six2,
}) {
  return (
    <>
      <div className="carscard">
        <span className="one1">{one}</span>
        <div className="two2">
          {" "}
          <h2>{two}</h2>
        </div>
        <div className="three3">
          <img src={three} alt="" />
        </div>
        <div className="four4">
          <span className="four">{four1}</span>
          <span className="four">{four2}</span>
          <span className="four">{four3}</span>
        </div>
        <div className="five">
          <span className="five">{five1}</span>
          <span className="five">{five2}</span>
          <span className="five">{five3}</span>
        </div>
        <div className="six">
          <span className="six1">{six1}</span>
          <span className="six2">
            <button>{six2}</button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Carcards;
