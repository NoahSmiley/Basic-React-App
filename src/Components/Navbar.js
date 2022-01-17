import "./../style.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <a href="" className="navbar-link">
                        <div className="navbar-link-box">
                            <p className="navbar-link-text">About</p>
                        </div>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">
                        <div className="navbar-link-box">
                            <p className="navbar-link-text">Home</p>
                        </div>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">
                        <div className="navbar-link-box">
                            <p className="navbar-link-text">Services</p>
                        </div>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="" className="navbar-link">
                        <div className="navbar-link-box">
                            <p className="navbar-link-text">Contact</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;