import { BookmarkBorderOutlined, FavoriteBorderOutlined, ModeCommentOutlined, SendOutlined } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="postInfo">
        <img
          className="postInfoImg"
          alt="Post Profile"
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
        />
        <div className="postInfoUsername">Rumman</div>
        <div className="timinginfo"> . 36 min</div>
      </div>
      <div className="postImg">
        <img
          alt="Post"
          className="postImage"
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
        />
      </div>
      <div className="iconsBlock">
        <div className="leftIcon">
          <FavoriteBorderOutlined sx={{ fontSize: "25px" }} />
          <ModeCommentOutlined sx={{ fontSize: "25px" }} />
          <SendOutlined sx={{ fontSize: "25px" }} />
        </div>
        <div className="rightIcon">
          <BookmarkBorderOutlined sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="likeSction">
        <div className="imagesLike">
          <img
            className="likeImg"
            alt="Like 1"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
          />
          <img
            className="likeImg2"
            alt="Like 2"
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
          />
        </div>
        <div className="noOfLikes">112,456 Likes</div>
      </div>
      <div className="postAbout">
        <div className="postAboutName">Alkami Siddik</div>
        <div className="infoComment">Happy mother's day to my angel! ..</div>
      </div>
      <div className="noOfComment">View all 456 comments</div>
      <div className="addComment">Add a comment</div>
    </div>
  );
};

export default Post;
