import React from 'react';
import { render } from 'react-dom';
import BlogApp from './components/blog-app/blog-app';
import Home from './home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const store = createStore(allReducers);
const history = createBrowserHistory();

class Navigation extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/blogs" component={BlogApp}/>
                </div>
            </Router>
        )
    }
}

render(
    <Provider store={store}>
        <Navigation/>
    </Provider>,
    document.getElementById('app')
);