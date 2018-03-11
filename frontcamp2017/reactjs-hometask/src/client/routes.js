import Home from './home';
import Blogs from '../shared/app';

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