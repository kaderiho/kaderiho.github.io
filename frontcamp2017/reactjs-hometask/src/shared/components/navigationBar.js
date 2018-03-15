import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blogs">Articles</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/auth/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavigationBar;