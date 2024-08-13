import { useState } from "react";

export default function Body() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [userToken, setUserToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form className="login-form">
        <h2>Login</h2>

        <div className="inputs-container">
          <div className="input-label-wrapper">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" required />
          </div>

          <div className="input-label-wrapper">
            <label>Password</label>
            <input type="password" required />
          </div>
        </div>

        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="login">Login</button>
        </div>
      </form>
    </div>
  );
}
