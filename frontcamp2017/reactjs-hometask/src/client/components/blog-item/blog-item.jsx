import React from 'react';
import { render } from 'react-dom';

class BlogItem extends React.Component {
    constructor(initProps){
        super(initProps);

        this.removeBlogItemHandler = () => {
            this.props.removeBlogItemHandler(this.props.blog.id);
        }
    }

    render(){
        const { date: blogDate, text: blogText, author: blogAuthor } = this.props.blog;

        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {blogText}
                </p>
                <span className="blogDate">{blogDate.toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={this.removeBlogItemHandler.bind(this)}/>
                <p>
                    <b>Author: {blogAuthor}</b>
                </p>
            </article>
        )
    }
}

export default BlogItem;