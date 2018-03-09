import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import BlogItem from '../blog-item/blog-item';

class BlogsList extends React.Component {
    constructor(initProps) {
        super(initProps);
    }

    render() {
        const { blogs } = this.props;

        return(
            <div className="blogsList">
                {blogs.map((blogItem) => <BlogItem key={blogItem.id} blog={blogItem}/>)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs
    };
}

export default connect(mapStateToProps)(BlogsList);
