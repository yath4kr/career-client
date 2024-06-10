const Home = () => {
  return (
    <>
      <div className="home-search">
        <span className="home-search-text">Categories : </span>
        <div className="home-search-container">
          <input className="home-search-input" placeholder="Enter your text" />
          <div className="home-search-button">
            <img src="./search-icon.png" height="25px" width="25px" />
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="web-intro">
          Entrust Your Career to the best <br /> Be the Change <br />
          <span className="web-intro-super">Career Point</span>
        </div>
        <div className="banner-pic">
          <img src="./Home_pic.png" height="470px" width="470px" />
        </div>
      </div>
    </>
  );
};
export default Home;
