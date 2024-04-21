import "./Homepage.css";
import hike from "../../assets/hiking.svg";
import pfp from "../../assets/pfp.svg";
import StoreItem from "./StoreItem";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
export default function Homepage() {
  return (
    <div className="homepage">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="small-box">
          <img src={hike} style={{ height: "50%" }} />
          <button>Play Now!</button>
        </div>
        <div className="small-box" style={{ flexDirection: "row" }}>
          <img
            src={pfp}
            style={{
              width: "30%",
              backgroundColor: "#4A7F66",
              borderRadius: "100%",
              padding: "15px 15px 15px 15px",
            }}
          />
          <div style={{ display: "70%" }}>
            <h1 style={{ fontSize: "1.5rem" }}>Vrushang Anand</h1>
            <h1 style={{ fontSize: "1.5rem" }}>3567 points</h1>
            <h1 style={{ fontSize: "1.5rem" }}>37 places visited</h1>
          </div>
        </div>
      </div>
      <div className="large-box">
        <h1
          style={{
            height: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            width: "100%",
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#4a7f66",
          }}
        >
          Store
        </h1>
        <div className="store-item-container">
          <StoreItem src={logo1} price="5" />
          <StoreItem src={logo2} price="10" />
          <StoreItem src={logo3} price="7" />
          <StoreItem src={logo4} price="8" />
        </div>
      </div>
    </div>
  );
}
