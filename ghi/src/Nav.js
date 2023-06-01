import {NavLink} from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                    <NavLink className="navbar-brand home-link" to="/">Home</NavLink>
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                    </button>        
            </div>
        </nav>
    )
}

export default Nav