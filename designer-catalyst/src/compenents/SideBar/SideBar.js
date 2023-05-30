import { useEffect } from 'react';
import { Route, Routes, Link , useLocation } from 'react-router-dom';

import './SideBar.css';
import avatar from '../../assets/avatar.png';

import { Profile } from '../Profile/Profile.js';
import { Home } from '../Home/Home.js';
import { ImageMorphing } from '../ImageMorphing/ImageMorphing.js';
import { DataAugmentation } from '../DataAugmentation/DataAugmentation.js';
import { GenerateImage } from '../GenerateImage/GenerateImage.js';
import { SavedImages } from '../SavedImages/SavedImages.js';
import { DrawPlane } from '../DrawPlane/DrawPlane.js';
import { BugReport } from '../BugReport/BugReport.js';

export function SideBar() {
    const location = useLocation();
    
    var sidebar;
    useEffect(() => {
        sidebar = Array.from(document.querySelectorAll('.sidebar'))[0];
        const navItems = Array.from(document.querySelectorAll('nav .nav-item'));
        navItems.forEach(navItem => {
            if(location.pathname === navItem.id) {
                navItem.classList.add('active');
            }
            
            navItem.addEventListener('click', () => {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });
                navItem.classList.add('active');
            });
        });

    }, [location]);

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
                <Route path="" element={<Home/>}></Route>
                <Route path="/morphing" element={<ImageMorphing/>}></Route>
                <Route path="/augmentation" element={<DataAugmentation/>}></Route>
                <Route path="/generate" element={<GenerateImage/>}></Route>
                <Route path="/images" element={<SavedImages/>}></Route>
                <Route path="/draw" element={<DrawPlane/>}></Route>
                <Route path="/bug" element={<BugReport/>}></Route>
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
                                <Link to="/home/profile" className="nav-item" id="/home/profile">
                                    <i className="bx bxs-face"></i>
                                    <span>Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home" className="nav-item" id="/home">
                                    <i className="bx bxs-home"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/generate" className="nav-item" id="/home/generate">
                                    <i className="bx bxs-image-add"></i>
                                    <span>Generate Image</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/morphing" className="nav-item" id="/home/morphing">
                                    <i className="bx bxs-image"></i>
                                    <span>Image Morphing</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/augmentation" className="nav-item" id="/home/augmentation">
                                    <i className="bx bx-images"></i>
                                    <span>Data Augmentation</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/images" className="nav-item" id="/home/images">
                                    <i className="bx bxs-photo-album"></i>
                                    <span>Saved Images</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/draw" className="nav-item" id="/home/draw">
                                    <i className="bx bxs-pencil"></i>
                                    <span>Draw</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/notifications" className="nav-item" id="/home/notifications">
                                    <i className="bx bxs-bell"></i>
                                    <span>Notifications</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/settings" className="nav-item" id="/home/settings">
                                    <i className="bx bxs-cog"></i>
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/bug" className="nav-item" id="/home/bug">
                                    <i className="bx bxs-message-dots"></i>
                                    <span>Report Bug</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
}

