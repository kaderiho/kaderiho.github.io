import React from 'react';
import { render } from 'react-dom';

class BlogItem extends React.Component {
    constructor(props){
        super(props);
        this.removeBlogItem = this.removeBlogItem.bind(this);
    }

    removeBlogItem() {
        this.props.removeBlogItem(this.props.blog.id);
    }

    render(){
        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {this.props.blog.text}
                </p>
                <span className="blogDate">{this.props.blog.date.toString()}</span>
                <input type="button" value="x" onClick={this.removeBlogItem.bind(this)}/>
            </article>
        )
    }
}

export default BlogItem;