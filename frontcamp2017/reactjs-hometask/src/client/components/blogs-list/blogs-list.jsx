import React from 'react';
import { render } from 'react-dom';
import BlogItem from '../blog-item/blog-item';

class BlogsList extends React.Component {
    constructor(initProps) {
        super(initProps);

        this.removeBlogItemHandler = (removedItemId) => {
            this.props.removeBlogItemHandler(removedItemId);
        }
    }

    render() {
        const { blogList } = this.props;

        return(
            <div className="blogsList">
                {blogList.map((blogItem) => <BlogItem removeBlogItemHandler={this.removeBlogItemHandler}
                                                      key={blogItem.id}
                                                      blog={blogItem}/>)}
            </div>
        )
    }
}

export default BlogsList;
