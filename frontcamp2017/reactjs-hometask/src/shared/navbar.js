import React from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const items = [{
            name: 'Home',
            param: '/'
        }, {
            name: 'Blogs',
            param: '/blogs'
        }, {
            name: 'Login',
            param: '/login'
        }, {
            name: 'Signup',
            param: '/signup'
        }];

        return (
            <div>
                <ul>
                    {items.map(({ name, param}) => (
                        <NavLink to={`${param}`} key={name}>
                            {name}
                        </NavLink>
                    ))}
                </ul>
            </div>
        )
    }
}

export default NavBar;