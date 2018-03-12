import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from '../components/blogs-filter/blogs-filter';
import BlogAdding from '../components/blog-adding/blog-adding';
import BlogsList from '../components/blogs-list/blogs-list';

class BlogApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BlogAdding/>
                <BlogsList data={this.props.staticContext.data}/>
                <BlogsFilter/>
            </div>
        )
    }
}

export default BlogApp;