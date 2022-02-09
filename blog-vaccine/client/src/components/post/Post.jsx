import "./post.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Post({ post, pemission, handleDelete, handleAccept }) {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  return (
    <div className="post">
      {pemission && !user?.isAdmin && (
        <div className={`statusPost ${post.isShown ? "success" : "warning"}`}>
          {post.isShown ? "Đã được duyệt" : "Chờ duyệt"}
        </div>
      )}
      {pemission && user?.isAdmin && (
        <div className="actionAdminPost">
          <button
            className="delete_Button Button"
            onClick={handleDelete.bind(this, post._id)}
          >
            Xóa
          </button>

          <button
            className="accept_Button Button"
            onClick={handleAccept.bind(this, post._id)}
          >
            Duyệt
          </button>
        </div>
      )}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="postDesc">
        <div dangerouslySetInnerHTML={{ __html: post.desc }}></div>
      </p>
    </div>
  );
}
