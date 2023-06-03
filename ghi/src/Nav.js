import {NavLink} from 'react-router-dom';
import React from 'react';


function Nav({navVisible, toggleNav}) {
    // const location = useLocation();

    const handleLinkClick = () => {
        if (navVisible) {
            toggleNav();
        }
    };

return (
    <nav className={`navbar ${navVisible ? 'visible' : 'hidden'}`}>
        {/* <div className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
            <div className="d-flex align-items-center">
                {!navVisible && (
                    <button
                        className="navbar-toggler"
                        onClick={toggleNav}
                        style={{marginRight: '75px'}}
                    >
                        Menu
                    </button>
                )}
                {navVisible && (
                    <div className="navbar-links"> */}
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active" onClick={handleLinkClick}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeclassname="active" onClick={handleLinkClick}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
                    {/* </div> */}
                {/* )}
            </div>
        </div> */}
    </nav>
    );
}

export default Nav;
