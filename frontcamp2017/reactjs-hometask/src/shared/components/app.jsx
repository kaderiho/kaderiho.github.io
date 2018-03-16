import React, { Component} from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './navigationBar';

import HomePage from '../../browser/pages/homePage';
import BlogsPage from '../../browser/pages/blogsPage';
import LoginPage from '../../browser/pages/loginPage';
import SignUpPage from '../../browser/pages/signUpPage';
import FlashMessagesList from '../../browser/components/flash/flash-messages-list'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <FlashMessagesList/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/articles" component={BlogsPage} />
                    <Route path="/auth/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                </Switch>
            </div>
        )
    }
}

export default App;