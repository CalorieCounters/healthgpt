import {NavLink} from "react-router-dom";


function Nav() {
    return (
    <nav className="navbar">
        <div className="container-fluid">
            <div className="d-flex align-items-center">
            <NavLink className="navbar-brand home-link me-auto" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="dashboard">Dashboard</NavLink>
            </div>
        <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginRight: "75px" }}
        ></button>
        </div>
    </nav>
    );
}

export default Nav;
