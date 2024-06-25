const Instructor = () => {
  const InstructorData = {
    name: "Mayuko Inoue",
    image: "",
    details: "",
  };

  const list = ["Ram", "Mohan", "Sohan"];
  return (
    <div className="instructor-page">
      <div className="instructor-page-introduction-section">
        <div className="instructor-page-introduction-image-container">
          <img
            src="https://www.tryswift.co/assets/images/speakers/tokyo2019/speakers/mayuko_inoue.jpg"
            className="instructor-page-image"
          />
        </div>
        <div className="instructor-page-introduction-text-container">
          <div className="instructor-page-name">Mayuko Inoue</div>
          <div className="instructor-page-full-details">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </div>
        </div>
      </div>
      <div className="influencer-list1">
        {list.map((element, index) => {
          <div className="influencer-list-elements"></div>;
        })}
      </div>
    </div>
  );
};
export default Instructor;
