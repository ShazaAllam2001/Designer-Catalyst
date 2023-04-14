import './GenerateImage.css';

export function GenerateImage() {
  return (
    <div className="generate-image">
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>

      <div className="image-div">
        <input type="text" className="text-prompt" />
        <button className="action-btn"> 
          generate
        </button>
      </div>

      <div className="image-div">
        <img className="generated-image" />
      </div>
      
      <div className="image-div">
        <button className="action-btn"> 
          save
        </button>
        <button className="action-btn mask" > 
          upload mask
        </button>
      </div>
    </div>
  );
}