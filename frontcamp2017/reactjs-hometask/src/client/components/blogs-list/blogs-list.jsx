import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import BlogItem from '../blog-item/blog-item';

class BlogsList extends React.Component {
    constructor(initProps) {
        super(initProps);
    }

    render() {
        return(
            <div className="blogsList">
                {/*{this.props.blogs.map((blogItem) => <BlogItem key={blogItem.id} blog={blogItem}/>)}*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.visibilityFilter ? state.blogs.filter((blog) => blog.text.indexOf(state.visibilityFilter) !== -1) : state.blogs
    }
};

// export default connect(mapStateToProps)(BlogsList);
export default BlogsList
