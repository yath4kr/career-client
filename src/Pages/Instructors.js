import { useNavigate } from "react-router-dom";
import Search from "../Components/Search";
import axios from "axios";
import { useEffect, useState } from "react";

const Instructors = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchInfluncers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/clients/fetchInfluencers`);
        setList(res?.data?.influencers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInfluncers();
  }, []);

  const navigate = useNavigate();

  function clickHandle(id) {
    navigate(`/instructor/${id}`);
  }
  return (
    <>
      <div className="instructors">
        <Search />
        <h1 className="instructors-main-heading">
          Learn from the{" "}
          <span className="instructors-main-heading-special">
            World's Best Instructor or Influencer
          </span>{" "}
          of your Choice
        </h1>
        <div className="instructors-list">
          {list?.map((instructor, index) => {
            return (
              <div
                className="instructor-box"
                key={index}
                onClick={(e) => {
                  clickHandle(instructor._id);
                }}
              >
                <hr className="instructors-seperate-line" />
                <div className="instructor-inner-box">
                  <div className="instructor-image-box">
                    <img
                      src={instructor.imageUrl}
                      alt={instructor.name}
                      className="instructor-image"
                    />
                  </div>
                  <div className="instructor-details-box">
                    <div className="instructor-name">{instructor.name}</div>
                    <div className="instructor-details">{instructor.title}</div>
                  </div>
                </div>
                <hr className="instructors-seperate-line" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instructors;
