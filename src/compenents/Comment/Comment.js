import './Comment.css';

export function Comment({ avatar, username, text }) {

  return (
    <div className="comment">
      <div className="user-avatar">
        <img src={avatar} alt="author avatar"></img>
      </div>

      <div className="user-data">
          <div className="username"> {username} </div>
          <div className="comment-text"> {text} </div>
      </div>
    </div>
  );
}