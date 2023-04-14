import './Post.css';

import avatar from '../../assets/avatar.png';
import postContent from '../../assets/post-img.jpg';

import { Comments } from '../Comments/Comments.js';

export function Post() {
    const userAvatar = avatar;
    const username = "User Name";
    const date = new Date('July 20, 2021 20:17:40 GMT+00:00');
    const content = postContent;
    const rating = 4.6;
    const commentsCount = 20;
    const comment = {avatar: avatar, text: "It is awsome!"};

    function rate() {

    }

    function addComment() {

    }

    function showComments() {

    }

    return (
        <div className="post">
            <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>

            <div className="user-info">
                <div className="user-avatar">
                    <img src={userAvatar} alt="author"></img>
                </div>

                <div className="user-data">
                    <div className="username"> {username} </div>
                    <div className="post-date"> {date.toUTCString()} </div>
                </div>
            </div>

            <div className="post-content">
                <img src={content} alt="..."></img>
            </div>

            <div className="post-info">
                <div className="click-icon" onClick={rate}>
                    <div className="icon"><i className="bx bx-star"></i></div>
                    <div className="count">{rating}</div>
                </div>
                <div className="click-icon" onClick={showComments}>
                    <div className="icon"><i className="bx bx-comment"></i></div>
                    <div className="count">{commentsCount}</div>
                </div>
            </div>

            <div className="comment">
                <div className="user-avatar">
                    <img src={comment.avatar} alt="author avatar"></img>
                </div>

                <div className="user-data">
                    <div className="username"> {username} </div>
                    <div className="comment-text"> {comment.text} </div>
                </div>
            </div>

            <div className="comment-input">
                <div className="user-avatar">
                    <img src="https://justmonk.github.io/react-news-feed-spa-demo/img/user-avatar.jpg" alt="avatar"></img>
                </div>
                <form onSubmit={addComment}>
                    <input name="text" type="text" maxLength="200" placeholder="Write you comment here"></input>
                    <button className="submit-button" type="submit">
                    </button>
                </form>
            </div>
        </div>
    );
}