import "./middleSide.css";
import stories from "../storys.json";
import Post from "./Post/post";

const MiddleSide = () => {
  const story = stories.story;
  return (
    <div className="middleHomeSide">
      <div className="storyBlock">
        {story?.map((item, index) => {
          return (
            <div className="storyParticular">
              <div className="imageDiv">
                <img className="statusImg" src={item.url} alt="Status" />
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="postSection">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MiddleSide;
