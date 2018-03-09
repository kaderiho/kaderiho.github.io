import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeBlog } from '../../actions/index';

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
                <input type="button" value="x" onClick={() => this.props.removeBlog(this.props.blog)}/>
                <p>
                    <b>Author: {blogAuthor}</b>
                </p>
            </article>
        )
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ removeBlog }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BlogItem);