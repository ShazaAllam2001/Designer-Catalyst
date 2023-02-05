import './Profile.css';

export function Profile() {
  return (
    <div className="profile">
        <div className="profile-card">
            <h1> My Profile </h1>
            <div>
                <img className="profile-img" 
                    src="avatar.png" 
                    alt="..." />
            </div>
            <div>
                <h2> First Name </h2>
            </div>
            <div>
                <h2> Second Name </h2>
            </div>
            <div>
                <h2> Email </h2>
            </div>
            <div>
                <h2> Password </h2>
            </div>
        </div>
    </div>
  );
}

