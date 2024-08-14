import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Instructor = () => {
  const { id } = useParams();
  const [influencer, setInfluencer] = useState(null);
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/clients/fetchInfluencer/${id}`
        );
        setInfluencer(res.data.influencer);
        setBooks(res.data.influencer.books);
        setCourses(res.data.influencer.courses);
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
          <div className="instructor-page-books-container">
            <div className="booksSectionHeading">Books : </div>
            <div className="bookListHolder">
              {books?.map((book, index) => {
                return (
                  <div key={index} className="bookItem">
                    <a href={`${book.url}`}>
                      <div className="bookHolder">
                        <img
                          src={`${process.env.PUBLIC_URL}/book-logo.png`}
                          alt="books"
                          height="100px"
                          width="90px"
                        />
                      </div>
                    </a>
                    <div>{book.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="instructor-page-books-container">
            <div className="booksSectionHeading">Courses : </div>
            <div className="bookListHolder">
              {courses?.map((book, index) => {
                return (
                  <div key={index} className="bookItem">
                    <a href={`${book.url}`}>
                      <div className="bookHolder">
                        <img
                          src={`${process.env.PUBLIC_URL}/course-logo.png`}
                          alt="books"
                          height="100px"
                          width="90px"
                        />
                      </div>
                    </a>
                    <div>{book.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructor;
