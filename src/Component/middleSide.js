import "./middleSide.css";
import mockData from "../mockData.json";
import Post from "./Post/post";
import instagramLogo from '../assets/instagramlogo.png';

const MiddleSide = () => {
  const stories = mockData.story;
  const posts = mockData.posts;
  return (
    <div className="middleHomeSide">
      <div className="mobileTopBar">
        <div className="instaMobileLogo">
          <img className="logoImg" src={instagramLogo} alt="Instagram" />
        </div>
      </div>
      <div className="storyBlock">
        {stories?.map((item, index) => {
          return (
            <div className="storyParticular" id={index}>
              <div className="imageDiv">
                <img className="statusImg" src={item.url} alt="Status" />
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="postSection">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSide;
