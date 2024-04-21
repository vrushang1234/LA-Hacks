import Login from "./Components/SignUp-Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import SignUp from "./Components/SignUp-Login/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import PlayNow from "./Components/PlayNow/PlayNow";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <PlayNow />
    </div>
  );
}
