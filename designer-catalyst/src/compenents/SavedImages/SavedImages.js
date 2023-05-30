import { useEffect , useState } from 'react';

import './SavedImages.css';

export function SavedImages() {
  let generated_images; // get from database
  let seg_masks; // get from database

  // just for testing
  let generated_images_urls = [
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
  generated_images = generated_images_urls.map((image, index) => 
    <img className="image" key={index} id={index} src={image} alt="..." onClick={showImage} />
  );
  seg_masks = generated_images;
  // just for testing

  const [maximizedImage, setMaximizedImage] = useState(null);

  function showImage(e) {
    setMaximizedImage(
      <div className="bgmodal">
        <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
        <div className="modal-content">
            <button className="close">
                <i className="material-icons" onClick={closeImage}>
                    close
                </i>
            </button>
            <div>
              <img className="maximized-image" src={e.target.src} alt="..." />
              <div className="btns">
                <button className="btn download"> 
                  <i className="bx bx-download" style={{ fontSize: '22px' }}></i>
                  Download 
                </button>
              </div>
            </div>
        </div>
      </div>
    );
  }

  function closeImage() {
    setMaximizedImage(null);
  }

  /*useEffect(() => {
    let generated_images_urls = [];
    for(let i=0; i<10; i++) {
      new Promise(resolve => {
        let req = new XMLHttpRequest();
        req.onload = function () {
           resolve(this.responseURL);
        };
        req.open("get", "https://picsum.photos/1024/768/?random", true);
        req.send();
      }).then(url => {
        console.log(url);
        generated_images_urls.unshift(url);
      });
    }
    generated_images = generated_images_urls.map((image) => 
        <img src={image} />
    );
  }, []);*/

  return (
    <div className="saved-images">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <div className="gallery-wrapper">
        <div className="gallery">
          <h1> Generated Images </h1>
          <div className="images">
            {generated_images}
          </div>
        </div>
        <div className="gallery">
          <h1> Segmenetation Masks </h1>
          <div className="images">
            {seg_masks}
          </div>
        </div>
      </div>
      { maximizedImage }
    </div>
  );
}