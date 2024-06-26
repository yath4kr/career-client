import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Redux/slices/loginSlice";

const Login = ({ setAuthState }) => {
  const [passType, setPasstype] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const url = "http://localhost:5000";
  const dispatch = useDispatch();

  const idChangeHandler = (e) => {
    setId(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${url}/user/login`, {
        id,
        password,
      });
      dispatch(login());
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
          <label for="id">Write your username or email : </label>
          <br />
          <input id="id" onChange={idChangeHandler} />
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
