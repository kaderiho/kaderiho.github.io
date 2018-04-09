import React from 'react';
import { render } from 'react-dom';

import ArticleFilter from '../components/article/articles-filter';
import ArticleAdding from '../components/article/article-adding';
import ArticleList from '../components/article/articles-list';

const BlogsPage = () => (
    <div style={{ marginTop: '20px' }}>
        <ArticleAdding/>
        <ArticleList/>
        <ArticleFilter/>
    </div>
);

export default BlogsPage;