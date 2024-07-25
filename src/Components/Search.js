import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  // const categories = [
  //   "aerospace",
  //   "development",
  //   "programming",
  //   "designing",
  //   "blockchain",
  //   "coding",
  //   "music",
  //   "ethical hacking",
  // ];

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/clients/fetchCategories`);
        const categoryNames =
          res?.data?.categories.map((category) => category.name) || [];
        setCategories(categoryNames);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const searchHandle = (e) => {
    const temp = e.target.value;
    if (temp != null || temp != undefined) {
      setSearch(temp.toLowerCase());
    }
  };

  const clickHandler = (value) => {
    setSearch(value);
    const smth = document.getElementById("search");
    smth.value = value;
  };

  const dispatcher = () => {
    if (search === "") {
      return;
    }
    navigate(`/specialInstructors/${search}`);
  };

  return (
    <>
      <div className="home-search">
        <span className="home-search-text">Categories : </span>
        <div className="home-search-container">
          <input
            className="home-search-input"
            id="search"
            placeholder="Enter your text"
            onChange={(e) => {
              searchHandle(e);
            }}
          />
          <div className="home-search-button" onClick={dispatcher}>
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
                  <div
                    key={index}
                    className="search-suggestion"
                    onClick={() => {
                      clickHandler(category.toUpperCase());
                    }}
                  >
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
