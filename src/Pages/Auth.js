import { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Auth = () => {
  const [authState, setAuthState] = useState(false);
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
