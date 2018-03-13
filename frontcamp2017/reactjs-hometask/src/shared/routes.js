import Home from '../browser/pages/home';
import Blogs from '../browser/pages/blogs';
import Login from '../browser/pages/login';
import Signup from '../browser/pages/signup';
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
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    }
];

export default routes;