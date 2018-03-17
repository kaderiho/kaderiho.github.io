import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { removeArticle } from '../../actions/articles';

class ArticleItem extends React.Component {
    constructor(initProps){
        super(initProps);
    }

    render(){
        const { date: articleDate, message: articleMessage, author: articleAuthor } = this.props.blog;

        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {articleMessage}
                </p>
                <span className="blogDate">{new Date(articleDate).toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={() => this.props.removeArticle(this.props.blog)}/>
                <p>
                    <b>Author: {articleAuthor}</b>
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
