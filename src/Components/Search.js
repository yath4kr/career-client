import { useState } from "react";

const Search = () => {
  const categories = [
    "aerospace",
    "development",
    "programming",
    "designing",
    "blockchain",
    "coding",
    "music",
    "ethical hacking",
  ];

  const [search, setSearch] = useState("");

  const searchHandle = (e) => {
    const temp = e.target.value;
    if (temp != null || temp != undefined) {
      setSearch(temp.toLowerCase());
    }
  };

  return (
    <>
      <div className="home-search">
        <span className="home-search-text">Categories : </span>
        <div className="home-search-container">
          <input
            className="home-search-input"
            placeholder="Enter your text"
            onChange={searchHandle}
          />
          <div className="home-search-button">
            <img src="./search-icon.png" height="25px" width="25px" />
          </div>
        </div>
        {search === "" ? (
          <></>
        ) : (
          <div className="search-suggetions">
            {categories
              .filter((category) => category.startsWith(search))
              .map((category, index) => {
                return (
                  <div key={index} className="search-suggestion">
                    {category.toUpperCase()}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};
export default Search;
