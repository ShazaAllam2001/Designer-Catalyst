import './PostWall.css';

import { Post } from '../Post/Post.js';

import avatar from '../../assets/avatar.png';

export function PostWall() {
    // just for testing
    const userAvatar = avatar;
    const username = "User Name";
    const date = new Date('July 20, 2021 20:17:40 GMT+00:00');
    const rating = 4.6;
    const commentsCount = 20;
    const comment = {avatar: avatar, text: "It is awsome!"};

    let posts;
    let images_urls = [
        "https://fastly.picsum.photos/id/3/1024/768.jpg?hmac=2sPBRwLQLIkqj6SEgd78RBwP-yLUnpwsUEmosuIdsX0",
        "https://fastly.picsum.photos/id/596/1024/768.jpg?hmac=q9PXDEOrLj3oAS3xpSFnYzN__ZQa_RxqouJ0G-sHQ8A",
        "https://fastly.picsum.photos/id/904/1024/768.jpg?hmac=_fjgeEgewh0hiFbPVTXPbklJ9eqeqCEqLTycO0_yQtU",
        "https://fastly.picsum.photos/id/292/1024/768.jpg?hmac=FMpKe8HszpcXFpZVHA-P6IkrlvS3bka2tC3pC5mBuXk",
        "https://fastly.picsum.photos/id/10/1024/768.jpg?hmac=mA5I0AkDe7a6l2QE_J0nnnEgg1YMuTifLB5o_AxyChY",
        "https://fastly.picsum.photos/id/975/1024/768.jpg?hmac=nwohZdlT3jJb1BfKt68MQ_rECCuTIatVOMG5jgUrG50",
        "https://fastly.picsum.photos/id/37/1024/768.jpg?hmac=zQnljzdQPaouOTie737KiA3fz2ANrAF6wCGL7vtrAE8",
        "https://fastly.picsum.photos/id/803/1024/768.jpg?hmac=61YoRvM2huqpgUC1tycmTibi3nCRubUKmjlqzevLYOM",
        "https://fastly.picsum.photos/id/1036/1024/768.jpg?hmac=pyCnv26-ynEYVMb2auR5X8WT9JIMbmXZxktfD8d5WAU",
        "https://fastly.picsum.photos/id/214/1024/768.jpg?hmac=dG9pnF2pZ7mbIsr_7ZspukCS4h7JMWSamLWPHhnAHvw",
        "https://fastly.picsum.photos/id/781/1024/768.jpg?hmac=Kutj2s31vnwn76YiUV9pJka_niZQBf2Diq39L8mCJtU",
        "https://fastly.picsum.photos/id/570/1024/768.jpg?hmac=J7Peq8uX0IP0xe5hpd0yP2QY8o7RehGcLKdIsRWR3dE"
    ];
    posts = images_urls.map((imageURL, index) => 
        <Post key={index} id={index} userAvatar={userAvatar} username={username} date={date}
            content={imageURL} rating={rating} commentsCount={commentsCount} comment={comment} />
    );
    // just for testing

    return (
        <div className="post-wall">
            {posts}
        </div>
    );
}