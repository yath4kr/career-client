import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = ({ setAuthState }) => {
  const [passType, setPasstype] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies, setCookies] = useCookies(["access_token", "user_id"]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/users/login`, {
        id,
        password,
      });
      console.log(res.data.token);
      setCookies("access_token", res.data.token);
      console.log(res.data.userId);
      setCookies("user_id", res.data.userId);
      window.alert(`successfully logged in : ${res.data.message}`);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="form-element">
          <h1>Login</h1>
        </div>
        <div className="form-element">
          <label>Write your username or email : </label>
          <br />
          <input id="id" onChange={idChangeHandler} />
        </div>
        <div className="form-element">
          <label>Password : </label>
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
          Don't have an account?{" "}
          <span
            className="login-switch-text-special"
            onClick={() => {
              setAuthState(true);
            }}
          >
            Register here
          </span>
        </span>
      </div>
    </>
  );
};

export default Login;
