import React from 'react';
import { render } from 'react-dom';

class BlogItem extends React.Component {
    constructor(initProps){
        super(initProps);

        const { props } = this;

        this.removeBlogItem = () => {
            props.removeBlogItem(props.blog.id);
        }
    }

    render(){
        const { props } = this;

        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {props.blog.text}
                </p>
                <span className="blogDate">{props.blog.date.toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={this.removeBlogItem.bind(this)}/>
                <p>
                    <b>Author: {props.blog.author}</b>
                </p>
            </article>
        )
    }
}

export default BlogItem;