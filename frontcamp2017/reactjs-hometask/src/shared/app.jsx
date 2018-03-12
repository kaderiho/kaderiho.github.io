import React, { Component} from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './navbar';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../browser/reducers/index';

let store = createStore(allReducers);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavBar/>

                    <Switch>
                        {routes.map(({ path, exact, component: C, ...rest }) => (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                render={(props) => (
                                    <C {...props} {...rest}/>
                                )}
                            />
                        ))}
                        <Route render={(props) => <NoMatch {...props} />} />
                    </Switch>
                </div>
            </Provider>
        )
    }
}

export default App;