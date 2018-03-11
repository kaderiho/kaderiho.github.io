import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from '../client/components/blogs-filter/blogs-filter';
import BlogAdding from '../client/components/blog-adding/blog-adding';
import BlogsList from '../client/components/blogs-list/blogs-list';

class BlogApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data}
                <BlogAdding/>
                <BlogsList/>
                <BlogsFilter/>
            </div>
        )
    }
}

export default BlogApp;