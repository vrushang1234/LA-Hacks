export default function Login() {
  async function handleSubmit() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const concat = username + password;
    const hash = btoa(concat);
    console.log(JSON.stringify({ hash }));
    const postresponse = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hash }),
    }).then((res) => res.json());
  }
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
        <input id="username" placeholder="Username" />
        <input id="password" placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
