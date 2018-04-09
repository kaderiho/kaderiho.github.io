import React, { Component} from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './navigationBar';

import HomePage from '../pages/homePage';
import BlogsPage from '../pages/blogsPage';
import LoginPage from '../pages/loginPage';
import SignUpPage from '../pages/signUpPage';
import FlashMessagesList from './flash/flash-messages-list'
import requireAuth from '../utils/requireAuth';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <FlashMessagesList/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/articles" component={requireAuth(BlogsPage)} />
                    <Route path="/auth/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            </div>
        )
    }
}

export default App;