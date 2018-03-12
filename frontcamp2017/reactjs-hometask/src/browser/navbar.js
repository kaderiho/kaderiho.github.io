import React from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        const items = [{
            name: 'Home',
            param: '/'
        }, {
            name: 'Blogs',
            param: '/blogs'
        }];

        return (
            <div>
                <ul>
                    {items.map(({ name, param}) => {
                        <NavLink to={`${param}`}>
                            {name}
                        </NavLink>
                    })}
                </ul>
            </div>
        )
    }
}

export default Navigation;