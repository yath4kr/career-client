import { useEffect, useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Auth = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.access_token) {
      navigate("/");
    }
  });
  return (
    <>
      {!authState ? (
        <>
          <Login setAuthState={setAuthState} />
        </>
      ) : (
        <>
          <Register setAuthState={setAuthState} />
        </>
      )}
    </>
  );
};

export default Auth;
