import "./Navbar.css";
import logo from "../../assets/leaf.svg";
export default function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} style={{ height: "90%" }} />
      GeoTraveler
    </header>
  );
}
