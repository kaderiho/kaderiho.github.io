import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { removeArticle } from '../../actions/articles';

class ArticleItem extends React.Component {
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
                <span className="blogDate">{new Date(blogDate).toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={() => this.props.removeArticle(this.props.blog)}/>
                <p>
                    <b>Author: {blogAuthor}</b>
                </p>
            </article>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        removeArticle: (article) => {
            dispatch(removeArticle(article))
        }
    };
}

export default connect(null, matchDispatchToProps)(ArticleItem);
