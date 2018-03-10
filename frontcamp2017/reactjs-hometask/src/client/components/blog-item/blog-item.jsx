import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { removeBlog } from '../../actions/blogs';

class BlogItem extends React.Component {
    constructor(initProps){
        super(initProps);
    }

    render(){
        const { date: blogDate, text: blogText, author: blogAuthor } = this.props.blog;

        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {blogText}
                </p>
                <span className="blogDate">{blogDate.toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={() => this.props.onRemoveBlog(this.props.blog)}/>
                <p>
                    <b>Author: {blogAuthor}</b>
                </p>
            </article>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        onRemoveBlog: (blog) => {
            dispatch(removeBlog(blog))
        }
    };
}

export default connect(null, matchDispatchToProps)(BlogItem);