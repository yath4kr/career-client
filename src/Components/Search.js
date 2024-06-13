const Search = () => {
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
    </>
  );
};
export default Search;
