import "./index.css";

const PostItem = (props) => {
  const { data } = props;
  const { name, comment, gender, date } = data;
  const profileRender =
    gender === "male"
      ? "https://res.cloudinary.com/dg2fgkjxv/image/upload/c_crop,ar_1:1/v1720363621/images_mrq0uv.jpg"
      : "https://res.cloudinary.com/dg2fgkjxv/image/upload/c_crop,ar_1:1/v1720363614/woman-icon-picture-profile-female-icon-human-people-sign-symbol-template-design-vector-woman-icon-picture-197275689_czrief.webp";
  return (
    <li className="list-item">
      <div className="comment-container">
        <img className="profile" src={profileRender} alt="profile" />
        <div>
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <button type="button" className="edit-button">
        Edit
      </button>
    </li>
  );
};
export default PostItem;
