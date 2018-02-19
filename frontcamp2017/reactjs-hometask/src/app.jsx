import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from './components/blogs-filter/blogs-filter.jsx';
import BlogAdding from './components/blog-adding/blog-adding.jsx';
import BlogsList from './components/blogs-list/blogs-list.jsx';
import BlogItem from './components/blog-item/blog-item.jsx';

let blogs = [{
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}, {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}, {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date()
}];

class BlogApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BlogAdding />
                <BlogsList blogs={blogs}/>
            </div>
        )
    }
}

render(<BlogApp/>, document.getElementById('app'));