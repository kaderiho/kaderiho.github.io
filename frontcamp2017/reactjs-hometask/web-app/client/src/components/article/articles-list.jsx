import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import ArticleItem from './article-item';

class ArticlesList extends React.Component {
    constructor(initProps) {
        super(initProps);
    }

    render() {
        return(
            <div className="articlesList">
                {this.props.articles ? this.props.articles.map((articleItem) => <ArticleItem key={articleItem.id} blog={articleItem}/>) : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.visibilityFilter ? state.articles.filter((article) => article.message.indexOf(state.visibilityFilter) !== -1) : state.articles
    }
};

export default connect(mapStateToProps)(ArticlesList);
