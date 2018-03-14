import HomePage from '../browser/pages/homePage';
import BlogsPage from '../browser/pages/blogsPage';
import LoginPage from '../browser/pages/loginPage';
import SignUpPage from '../browser/pages/signupPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/blogs',
        component: BlogsPage
    },
    {
        path: '/auth/login',
        component: LoginPage
    },
    {
        path: '/auth/signup',
        component: SignUpPage
    }
];

export default routes;