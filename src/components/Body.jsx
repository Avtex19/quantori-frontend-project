import { useState } from "react";
import useRetrieveUser from "../hooks/useRetrieveUser";
import useTokenExpiry from "../hooks/useTokenExpiry";

export default function Body() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userData, setUserData] = useRetrieveUser();
  const [loading, setLoading] = useState(false);
  useTokenExpiry(localStorage.getItem("token"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: userPassword,
        expiresInMins: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUserData(data);
        setLoading(false);
        setUsername("");
        setUserPassword("");
      });
  };

  return userData === null ? (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="inputs-container">
          <div className="input-label-wrapper">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-label-wrapper">
            <label>Password</label>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              required
            />
          </div>
        </div>

        <div className="buttons">
          <button type="reset" className="cancel">
            Cancel
          </button>
          <button className="login">{loading ? 'Loading...' : 'Login'}</button>
        </div>
      </form>
    </div>
  ) : (
    <div className="user-profile">
      <h4>
        Email: <span>{userData.email} </span>
      </h4>
      <h4>
        username: <span>{userData.username}</span>
      </h4>
      <h4>
        Gender: <span>{userData.gender}</span>
      </h4>

      <button
        onClick={() => {
          setUserData(null);
          localStorage.clear();
        }}
        className="login"
      >
        Log Out
      </button>
    </div>
  );
}
