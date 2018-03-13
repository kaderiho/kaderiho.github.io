import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from '../components/blog/blogs-filter';
import BlogAdding from '../components/blog/blog-adding';
import BlogsList from '../components/blog/blogs-list';

class BlogsPage extends React.Component {
    constructor(props) {
        super(props);

        // let blogsList;
        //
        // if (__isBrowser__) {
        //     blogsList = window.__INITIAL_DATA__;
        //     delete window.__INITIAL_DATA__;
        // } else {
        //     blogsList = this.props.staticContext.data
        // }
        //
        // this.state = {
        //     blogsList
        // }
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

export default BlogsPage;