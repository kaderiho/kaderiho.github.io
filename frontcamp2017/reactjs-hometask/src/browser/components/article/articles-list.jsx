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
                {this.props.blogs ? this.props.blogs.map((articleItem) => <ArticleItem key={articleItem.id} blog={articleItem}/>) : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.visibilityFilter ? state.blogs.filter((blog) => blog.text.indexOf(state.visibilityFilter) !== -1) : state.blogs
    }
};

export default connect(mapStateToProps)(ArticlesList);
