import Home from '../browser/pages/home';
import Blogs from '../browser/pages/blogs';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: 'blogs',
        component: Blogs
    }
];

export default routes;