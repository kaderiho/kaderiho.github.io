import React from 'react';
import { render } from 'react-dom';

import BlogsFilter from '../components/blog/blogs-filter';
import BlogAdding from '../components/blog/blog-adding';
import BlogsList from '../components/blog/blogs-list';

const BlogsPage = () => (
    <div>
        <BlogAdding/>
        <BlogsList/>
        <BlogsFilter/>
    </div>
);

export default BlogsPage;