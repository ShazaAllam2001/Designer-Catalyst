import './GenerateImage.css';

export function GenerateImage() {
  return (
    <div className="generate-image">
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>

      <div className="generate-div">
        <input type="text" className="text-prompt" placeholder="Text prompt" />
        <button className="action-btn"> 
          generate
        </button>
      </div>

      <div className="images-div">
        <div className="image-div">
          <h2> Segmentation mask Image </h2>
          <img className="image" 
            src="https://fastly.picsum.photos/id/596/1024/768.jpg?hmac=q9PXDEOrLj3oAS3xpSFnYzN__ZQa_RxqouJ0G-sHQ8A" 
            alt="Segmentation mask" />
          <button className="action-btn mask" > 
            upload mask
          </button>
        </div>
        <div className="image-div">
          <h2> Generated Image </h2>
          <img className="image" 
            src="https://fastly.picsum.photos/id/596/1024/768.jpg?hmac=q9PXDEOrLj3oAS3xpSFnYzN__ZQa_RxqouJ0G-sHQ8A" 
            alt="Generated" />
          <div>
            <button className="action-btn"> 
              save
            </button>
            <button className="action-btn"> 
              download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}