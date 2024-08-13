import { useState } from "react";
import "./../App.css";
import AccountSymbol from "./../assets/account-icon.svg";

export default function Header() {
  const [nav, setNav] = useState("home");

  return (
    <div className="header-wrapper">
      <div className="navigation">
        <div className="user-icon">
          <img src={AccountSymbol} width={45} alt="Account icon" />
        </div>
        <nav>
          <a
            onClick={() => setNav("home")}
            className="nav-home"
            style={
              nav === "home"
                ? { backgroundColor: "#48752c", color: "white" }
                : { backgroundColor: "white", color: "#48752c" }
            }
          >
            Home
          </a>
          <a
            onClick={() => setNav("contact")}
            className="nav-contact"
            style={
              nav === "contact"
                ? { backgroundColor: "#48752c", color: "white" }
                : { backgroundColor: "white", color: "#48752c" }
            }
          >
            Contact
          </a>
          <a
            onClick={() => setNav("about")}
            className="nav-about"
            style={
              nav === "about"
                ? { backgroundColor: "#48752c", color: "white" }
                : { backgroundColor: "white", color: "#48752c" }
            }
          >
            About
          </a>
        </nav>
      </div>

      <div>
        <button className="login">Login</button>
      </div>
    </div>
  );
}
