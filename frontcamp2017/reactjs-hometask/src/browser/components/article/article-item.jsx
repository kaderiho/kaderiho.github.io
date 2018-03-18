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
            <article className="blogsList-blogItem card" style={{ marginBottom: '20px' }}>
                <p className="card-header">
                    <b>Author: {articleAuthor}</b>
                </p>

                <div className="card-body">
                    <p className="blogText card-title">
                        {articleMessage}
                    </p>
                    <p className="blogDate card-text">{new Date(articleDate).toLocaleTimeString()}</p>
                    <a href="#" onClick={this.removeArticle} className="btn btn-primary">Remove</a>
                </div>
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
