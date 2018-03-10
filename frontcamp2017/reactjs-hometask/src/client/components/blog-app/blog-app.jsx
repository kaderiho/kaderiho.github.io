import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from '../blogs-filter/blogs-filter';
import BlogAdding from '../blog-adding/blog-adding';
import BlogsList from '../blogs-list/blogs-list';

class BlogApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BlogAdding/>
                <BlogsList/>
                <BlogsFilter/>
            </div>
        )
    }
}

export default BlogApp;