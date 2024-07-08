import PostItem from "../PostItem";

import "./index.css";

const PostsDisplay = (props) => {
  const { userData } = props;
  return (
    <ul className="ul-list">
      {userData.map((each) => (
        <PostItem key={each.id} data={each} />
      ))}
    </ul>
  );
};

export default PostsDisplay;
