import { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './SideBar.css';
import avatar from '../../assets/avatar.png';

import { Profile } from '../Profile/Profile.js';
import { ImageMorphing } from '../ImageMorphing/ImageMorphing.js';
import { ImageAugmentation } from '../ImageAugmentation/ImageAugmentation.js';
import { Home } from '../Home/Home.js';
import { GenerateImage } from '../GenerateImage/GenerateImage.js';
import { SavedImages } from '../SavedImages/SavedImages.js';
import { DrawPlane } from '../DrawPlane/DrawPlane.js';

export function SideBar({ useToggle }) {

    var sidebar;
    useEffect(() => {
        sidebar = Array.from(document.querySelectorAll('.sidebar'))[0];
        const navItems = Array.from(document.querySelectorAll('nav .nav-item'));

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                navItem.classList.add('active');
            });
        });

    }, []);

    function useToggle() {
        if(sidebar.className === 'sidebar')
            sidebar.classList.add('open');
        else
            sidebar.classList.remove('open');
    }

    return (
        <div>
            <Routes>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/morphing" element={<ImageMorphing/>}></Route>
                <Route path="/augmentation" element={<ImageAugmentation/>}></Route>
                <Route path="/generate" element={<GenerateImage/>}></Route>
                <Route path="/images" element={<SavedImages/>}></Route>
                <Route path="/draw" element={<DrawPlane/>}></Route>
            </Routes>

            <div className="body">
                <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
                <div className="sidebar">
                    <div className="toggle" onClick={useToggle}>
                        <i className="bx bx-chevron-right"></i>
                    </div>

                    <div className="logo">
                        <img src={avatar} alt="..."/>
                        <h3>User Name</h3>
                    </div>

                    <br/> 

                    <nav>
                        <ul>
                            <li>
                                <Link to="/profile" className="nav-item">
                                    <i className="bx bxs-face"></i>
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-item active">
                                    <i className="bx bxs-home"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/generate" className="nav-item">
                                    <i className="bx bxs-image-add"></i>
                                    <span>Generate Image</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/morphing" className="nav-item">
                                    <i className="bx bxs-image"></i>
                                    <span>Image Morphing</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/augmentation" className="nav-item">
                                    <i className="bx bx-images"></i>
                                    <span>Image Augmentation</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/images" className="nav-item">
                                    <i className="bx bxs-photo-album"></i>
                                    <span>Saved Images</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/draw" className="nav-item">
                                    <i className="bx bxs-pencil"></i>
                                    <span>Draw</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-bell"></i>
                                <span>Notifications</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-cog"></i>
                                <span>Settings</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-message-dots"></i>
                                <span>Report Bug</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
}

