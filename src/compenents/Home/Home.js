import './Home.css';

import { Post } from '../Post/Post.js';

export function Home() {
  let posts = [
    //{key: 1, image: <img src={}></img>, time: }
  ]; // get from database
  let content;
  /*posts.forEach(

  );*/

  return (
    <div className="home">
        <Post />
    </div>
  );
}