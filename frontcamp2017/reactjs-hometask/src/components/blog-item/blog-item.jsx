import React from 'react';
import { render } from 'react-dom';

class BlogItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {this.props.blog.text}
                </p>
                <span className="blogDate">{this.props.blog.date.toString()}</span>
            </article>
        )
    }
}

export default BlogItem;