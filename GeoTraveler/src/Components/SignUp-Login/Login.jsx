export default function Login() {
  return (
    <div className="signup-container">
      <div className="signup">
        <h1
          style={{
            color: "white",
            fontSize: "2.5rem",
            position: "absolute",
            top: "10px",
          }}
        >
          Login
        </h1>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Submit</button>
      </div>
    </div>
  );
}
