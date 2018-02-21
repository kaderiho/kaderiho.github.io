import React from 'react';
import { render } from 'react-dom';
import BlogItem from '../blog-item/blog-item.jsx';

class BlogsList extends React.Component {
    constructor(initProps) {
        super(initProps);

        const { props } = this;

        this.removeBlogItemHandler = (removedItemId) => {
            props.removeBlogItemHandler(removedItemId);
        }
    }

    render() {
        const { props } = this;

        return(
            <div className="blogsList">
                {props.blogList.map((blogItem) => <BlogItem key={blogItem.id} blog={blogItem} removeBlogItemHandler={this.removeBlogItemHandler}/>)}
            </div>
        )
    }
}

export default BlogsList;
