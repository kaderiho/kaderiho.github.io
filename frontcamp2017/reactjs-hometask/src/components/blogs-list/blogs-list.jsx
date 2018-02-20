import React from 'react';
import { render } from 'react-dom';
import BlogItem from '../blog-item/blog-item.jsx';

class BlogsList extends React.Component {
    constructor(props) {
        super(props);

        this.removeBlogItemHandler = this.removeBlogItemHandler.bind(this);
    }

    removeBlogItemHandler(removedItemId) {
        this.props.removeBlogItemHandler(removedItemId);
    }

    render(){
        return(
            <div className="blogsList">
                {this.props.blogList.map((blogItem) => <BlogItem key={blogItem.id} blog={blogItem} removeBlogItemHandler={this.removeBlogItemHandler}/>)}
            </div>
        )
    }
}

export default BlogsList;
