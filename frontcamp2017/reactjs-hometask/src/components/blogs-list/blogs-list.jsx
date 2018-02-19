import React from 'react';
import { render } from 'react-dom';
import BlogItem from '../blog-item/blog-item.jsx';

class BlogsList extends React.Component {
    constructor(props) {
        super(props);

        this.removeBlogItem = this.removeBlogItem.bind(this);
    }

    removeBlogItem(removedItemId) {
        this.props.removeBlogItem(removedItemId);
    }

    render(){
        return(
            <div className="blogsList">
                {this.props.blogs.map((blog) => <BlogItem key={blog.id} blog={blog} removeBlogItem={this.removeBlogItem}/>)}
            </div>
        )
    }
}

export default BlogsList;
