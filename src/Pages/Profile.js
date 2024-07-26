import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const [cookies, setCookies] = useCookies(["access_token", "user_id"]);
  useEffect(() => {
    const fetchUserData = async () => {
      if (!cookies.access_token || !cookies.user_id) {
        setCookies("access_token", "");
        setCookies("user_id", "");
        navigate("/auth");
        return;
      }
      const userId = cookies.user_id;
      try {
        const res = await axios.get(`${url}/users/${userId}`, {
          headers: { authorization: cookies.access_token },
        });
        setUser(res.data.user);
        console.log(res.data);
      } catch (err) {
        console.error(err.res?.data?.message);
      }
    };
    fetchUserData();
  }, [cookies, navigate, setCookies, url]);

  const logoutHandle = () => {
    setCookies("access_token", "");
    setCookies("user_id", "");
  };

  return (
    <div className="profile-page-container">
      <div className="profile-page">
        <table className="profile-page-table">
          <tr>
            <th>Name : </th>
            <td>{user.name?.toUpperCase()}</td>
          </tr>
          <tr>
            <th>Username :</th>
            <td>{user.username?.toUpperCase()}</td>
          </tr>
          <tr>
            <th>Mobile : </th>
            <td>{user.mobile}</td>
          </tr>
          <tr>
            <th>Email : </th>
            <td>{user.email?.toUpperCase()}</td>
          </tr>
        </table>
        <button onClick={logoutHandle} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
