import { useNavigate } from "react-router-dom";
import Search from "../Components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const BASE_URL = "http://localhost:5000";
  const [featuredItems, setFeaturedItems] = useState([]);
  const [featuredItems2, setFeaturedItems2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/clients/fetchInfluencers`);
        const influencers = res?.data?.influencers || [];

        if (influencers.length < 5) {
          setFeaturedItems(influencers);
        } else {
          setFeaturedItems(influencers.slice(0, 4)); // First three items
          setFeaturedItems2(
            influencers.slice(4, Math.min(8, influencers.length))
          );
        }

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();

  function clickHandler(id) {
    navigate(`/instructor/${id}`);
  }

  return (
    <>
      <Search />

      <div className="banner">
        <div className="web-intro">
          Entrust Your Career to the best <br /> Be the Change <br />
          <span className="web-intro-super">Career Point</span>
        </div>
        <div className="banner-pic">
          <img
            src="./Home_pic.png"
            height="470px"
            width="470px"
            alt="Home Banner"
          />
        </div>
      </div>

      <div className="home-preview">
        <div className="home-preview-left">
          {featuredItems.map((featuredItem, index) => {
            return (
              <div
                key={index}
                className="preview-card"
                onClick={(e) => {
                  clickHandler(featuredItem._id);
                }}
              >
                <div className="preview-card-image-container">
                  <div className="preview-card-image">
                    <img
                      src={featuredItem.imageUrl}
                      alt={`${featuredItem.name}`}
                      className="preview-card-image-tag"
                    />
                  </div>
                </div>
                <div className="preview-card-intro">
                  <span className="preview-card-name">{featuredItem.name}</span>
                  <br />
                  <span className="preview-card-text">
                    {featuredItem.title}
                  </span>
                  <br />
                  <span className="preview-card-button">Know More</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="home-preview-right">
          {featuredItems2.map((featuredItem, index) => {
            return (
              <div
                key={index}
                className="preview-card"
                onClick={(e) => {
                  clickHandler(featuredItem._id);
                }}
              >
                <div className="preview-card-image-container">
                  <div className="preview-card-image">
                    <img
                      src={featuredItem.imageUrl}
                      alt={`${featuredItem.name}`}
                      className="preview-card-image-tag"
                    />
                  </div>
                </div>
                <div className="preview-card-intro">
                  <span className="preview-card-name">{featuredItem.name}</span>
                  <br />
                  <span className="preview-card-text">
                    {featuredItem.title}
                  </span>
                  <br />
                  <span className="preview-card-button">Know More</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
