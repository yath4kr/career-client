import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Instructor = () => {
  const { id } = useParams();
  const [influencer, setInfluencer] = useState(null);
  const BASE_URL = "http://localhost:5000";
  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/clients/fetchInfluencer/${id}`
        );
        setInfluencer(res.data.influencer);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInstructor();
  }, [id]);
  if (!influencer) return <div>Loading...</div>;
  return (
    <div className="instructor-page">
      <div className="instructor-page-introduction-section">
        <div className="instructor-page-introduction-image-container">
          <img
            // src="https://www.tryswift.co/assets/images/speakers/tokyo2019/speakers/mayuko_inoue.jpg"
            src={`${influencer?.imageUrl}`}
            className="instructor-page-image"
            alt={`${influencer?.name}`}
          />
        </div>
        <div className="instructor-page-introduction-text-container">
          <div className="instructor-page-name">{influencer.name}</div>
          <div className="instructor-page-title">{influencer.title}</div>
          <div className="instructor-page-full-details">
            {influencer?.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructor;
