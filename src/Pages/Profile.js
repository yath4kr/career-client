import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);
  useEffect(() => {
    if (!cookies.access_token) {
      navigate("/auth");
    }
  });

  const logoutHandle = () => {
    setCookies("access_token", "");
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={logoutHandle}>Logout</button>
    </>
  );
};

export default Profile;
