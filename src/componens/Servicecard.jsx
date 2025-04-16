import "../index.css";

function Servicecard({ upper, middle, last }) {
  return (
    <div style={{ color: "black" }} className="sercard">
      <span className="ser1">{upper}</span>
      <div className="ser2">{middle}</div>
      <div className="ser3">{last}</div>
    </div>
  );
}

export default Servicecard;
