import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchedInstructors = () => {
  const { search } = useParams();
  const val = search?.toLowerCase();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [catDetails, setCatDetails] = useState(null);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  function clickHandle(id) {
    navigate(`/instructor/${id}`);
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/clients/fetchCategory`, {
          name: val,
        });
        if (res.status === 200) {
          setCatDetails(res.data.category);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchInfluencers = async () => {
      try {
        const res = await axios.post(
          `${BASE_URL}/clients/fetchSpecialInstructors`,
          { category: val }
        );
        if (res.status === 200) {
          setList(res.data.influencers);
          console.log(res);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
    fetchInfluencers();
  }, [val]);

  if (loading) {
    return <h1>Loading....Please Wait!!</h1>;
  }

  if (!catDetails) {
    return <h1>Sorry, No such Details Found!</h1>;
  }

  return (
    <div className="SIPage">
      <div className="SICatSec">
        <h1 className="SIHeading">{catDetails.name.toUpperCase()}</h1>
        <div className="SIPara">{catDetails.description}</div>
      </div>
      <div>
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
    </div>
  );
};

export default SearchedInstructors;
