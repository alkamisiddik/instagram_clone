import { BookmarkBorderOutlined, FavoriteBorderOutlined, ModeCommentOutlined, SendOutlined } from "@mui/icons-material";

const Post = ({post}) => {
  return (
    <div className="post">
      <div className="postInfo">
        <img className="postInfoImg" alt="Post Profile" src={post.profileImage} />
        <div className="postInfoUsername">{post.username}</div>
        <div className="timinginfo"> . {post.time}</div>
      </div>

      <div className="postImg">
        <img alt="Post" className="postImage" src={post.postImage} />
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
          {post.likedBy.map((img, index) => (
            <img key={index} className={`likeImg${index > 0 ? index + 1 : ""}`} alt={`Like ${index + 1}`} src={img} />
          ))}
        </div>
        <div className="noOfLikes">{post.likes.toLocaleString()} Likes</div>
      </div>

      <div className="postAbout">
        <div className="postAboutName">{post.author}</div>
        <div className="infoComment">{post.caption}</div>
      </div>

      <div className="noOfComment">View all {post.commentsCount} comments</div>
      <div className="addComment">Add a comment</div>
    </div>
  );
};

export default Post;
