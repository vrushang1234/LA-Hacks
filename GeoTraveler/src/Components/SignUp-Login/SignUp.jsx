import "./SignUp.css";
import background from "../../assets/greenMountains.jpg";
export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup">
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Age" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
