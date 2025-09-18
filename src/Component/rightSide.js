import "./rigjhtSide.css";
import profile from '../assets/profile.png';
import mockData from "../mockData.json";
import { useState } from "react";

const RightSide = () => {
  const suggestedUsers = mockData.suggest;

  const [followStates, setFollowStates] = useState(
    suggestedUsers.reduce((acc, user) => {
      acc[user.username] = false;
      return acc;
    }, {})
  );

  const handleClick = (username) => {
    setFollowStates((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  return (
    <div className="rightSideHome">
      <div className="topProfileRight">
        <div className="leftRightProfile">
          <div className="imageDivRightSide">
            <img
              className="imageRightSideProfile"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="usernameBlock">
            <div className="usernameRightSide">__rumman</div>
            <div className="userFullName">Alkami Siddik</div>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestForYou">Suggested for you</div>
          <div className="seeAll">See All</div>
        </div>
        <div className="followBlockRightSide">
          {suggestedUsers.map((user, index) => (
            <div className="profileRightBottom" key={index}>
              <div className="leftRightProfile">
                <div className="imageDivRightSide">
                  <img className="imageRightSideProfile" src={user.profileImage} alt={user.fullName} />
                </div>
                <div className="usernameBlock">
                  <div className="usernameRightSide">{user.username}</div>
                  <div className="userFullName">{user.fullName}</div>
                </div>
              </div>
              <button
                className={`switchBtn ${followStates[user.username] ? "active" : ""}`}
                onClick={() => handleClick(user.username)}
              >
                {followStates[user.username] ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
