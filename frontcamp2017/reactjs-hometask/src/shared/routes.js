import Home from '../browser/pages/home';
import Blogs from '../browser/pages/blogs';
import fetchBlogs from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/blogs',
        component: Blogs,
        fetchInitialData: () => fetchBlogs()
    }
];

export default routes;