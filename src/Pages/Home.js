const Home = () => {
  const preview_intro =
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled";
  const img_url =
    "data:image/jpeg;base64,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";
  const featuredItems = [];
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

      <div className="home-preview">
        <div className="home-preview-left">
          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>

          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>

          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>

          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>
        </div>
        <div className="home-preview-right">
          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>
          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>
          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>
          <div className="preview-card">
            <img src={img_url} className="preview-card-image" />
            <div className="preview-card-intro">
              <span className="preview-card-name">Ankur Wariko</span>
              <br />
              <span className="preview-card-text">{preview_intro}</span>
              <br />
              <span className="preview-card-button">Know More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
