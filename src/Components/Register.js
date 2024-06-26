import { useState } from "react";
import axios from "axios";

const Register = ({ setAuthState }) => {
  const [passType, setPasstype] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const url = "http://localhost:5000";

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${url}/user/register`, {
        username,
        password,
        name,
        email,
        mobile,
      });

      if (res.status === 201) {
        window.alert("Successfully Registered");
      }
    } catch (err) {
      console.log(err.response.data.message);
      setErrorMessage(err.response.data.message);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="form-element">
          <h1>Register</h1>
        </div>
        <div className="form-element">
          <label for="name">Name : </label>
          <br />
          <input id="name" onChange={nameChangeHandler} />
        </div>
        <div className="form-element">
          <label for="username">Username : </label>
          <br />
          <input id="username" onChange={usernameChangeHandler} />
        </div>
        <div className="form-element">
          <label for="email">Email : </label>
          <br />
          <input id="email" onChange={emailChangeHandler} />
        </div>
        <div className="form-element">
          <label for="mobile">Mobile No : </label>
          <br />
          <input id="mobile" onChange={mobileChangeHandler} />
        </div>
        <div className="form-element">
          <label for="password">Password : </label>
          <br />
          <input
            id="password"
            type={passType ? "text" : "password"}
            onChange={passwordChangeHandler}
          />
          <span
            onClick={() => {
              setPasstype(!passType);
            }}
          >
            {passType ? "Hide" : "Show"}
          </span>
        </div>
        <span className="error-message">{errorMessage}</span>
        <button className="submit-button" onClick={submitHandler}>
          SUBMIT
        </button>
        <span className="login-switch-text">
          Already Registered?{" "}
          <span
            className="login-switch-text-special"
            onClick={() => {
              setAuthState(false);
            }}
          >
            Login here
          </span>
        </span>
      </div>
    </>
  );
};
export default Register;
