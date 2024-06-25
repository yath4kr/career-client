import { useState } from "react";
import Login from "../Components/Login";

const Auth = () => {
  const [authState, setAuthState] = useState(false);
  return <>{!authState ? <Login /> : <>SignUp</>}</>;
};

export default Auth;
