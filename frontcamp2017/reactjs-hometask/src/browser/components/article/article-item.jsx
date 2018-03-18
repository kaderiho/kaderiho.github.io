import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { removeArticle } from '../../actions/articles';
import axios from 'axios';

class ArticleItem extends React.Component {
    constructor(initProps){
        super(initProps);

        this.removeArticle = () => {
            axios.delete(`/articles/api`, { params: {id : this.props.blog._id} })
                .then((deletedArticle) => {
                    this.props.removeArticle(deletedArticle.data);
                },
                (err) => {});
        }
    }

    render(){
        const { date: articleDate, message: articleMessage, author: articleAuthor } = this.props.blog;

        return (
            <article className="blogsList-blogItem">
                <p className="blogText">
                    {articleMessage}
                </p>
                <span className="blogDate">{new Date(articleDate).toLocaleTimeString()}</span>
                <input type="button" value="x" onClick={this.removeArticle}/>
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
