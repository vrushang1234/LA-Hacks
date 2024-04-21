import "./SignUp.css";
import background from "../../assets/greenMountains.jpg";
export default function SignUp() {
  async function signupDo(){ // GOOD
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const email = document.getElementById("emailInput").value;
    const age = document.getElementById("ageInput").value;
    const concat = username + password;
    const hash = btoa(concat);
    console.log(JSON.stringify({ hash }));
    const postresponse = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hash, username, email, age}),
    }).then((res) => res.json());
  }

  return (
    <div className="signup-container">
      <div className="signup">
        <h1 style={{ color: "white" }}>Sign Up</h1>
        <input id="usernameInput" placeholder="Name" />
        <input id="emailInput" placeholder="Email" />
        <input id="ageInput" placeholder="Age" />
        <input id="passwordInput" placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
