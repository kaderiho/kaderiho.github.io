import HomePage from '../browser/pages/homePage';
import BlogsPage from '../browser/pages/blogsPage';
import LoginPage from '../browser/pages/loginPage';
import SignUpPage from '../browser/pages/signupPage';
import fetchBlogs from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/blogs',
        component: BlogsPage,
        fetchInitialData: () => fetchBlogs()
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/signup',
        component: SignUpPage
    }
];

export default routes;