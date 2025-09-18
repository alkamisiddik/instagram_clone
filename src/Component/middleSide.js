import "./middleSide.css";
import stories from "../storys.json";
import Post from "./Post/post";
import instagramLogo from '../assets/instagramlogo.png';

const MiddleSide = () => {
  const story = stories.story;
  return (
    <div className="middleHomeSide">
      <div className="mobileTopBar">
        <div className="instaMobileLogo">
          <img className="logoImg" src={instagramLogo} alt="Instagram" />
        </div>
      </div>
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
