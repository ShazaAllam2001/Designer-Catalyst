import { useEffect } from 'react';

import './SideBar.css';
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
            <DrawPlane/>
            <div className="body">
                <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet"/>
                <div className="sidebar">
                    <div className="toggle" onClick={useToggle}>
                        <i className="bx bx-chevron-right"></i>
                    </div>

                    <div className="logo">
                        <img src="https://github.com/hosseinnabi-ir/Responsive-Glass-Sidebar-using-CSS-and-JavaScript/blob/36ddc0b7e60f1da4ab38d9d45311f405a3e8e8c0/images/logo.png?raw=true" alt="..."/>
                        <h3>User Name</h3>
                    </div>

                    <br/> 

                    <nav>
                        <ul>
                            <li className="nav-item">
                                <i className="bx bxs-face"></i>
                                <span>Profile</span>
                            </li>
                            <li className="nav-item active">
                                <i className="bx bxs-home"></i>
                                <span>Home</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-image-add"></i>
                                <span>Generate Image</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-image"></i>
                                <span>Image Morphing</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bx-images"></i>
                                <span>Image Augmentation</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-photo-album"></i>
                                <span>Saved Images</span>
                            </li>
                            <li className="nav-item">
                                <i className="bx bxs-pencil"></i>
                                <span>Draw</span>
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

