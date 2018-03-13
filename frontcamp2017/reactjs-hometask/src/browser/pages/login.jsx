import React from 'react';
import { render } from 'react-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>
                    Please login there
                </h1>
                <a href="/auth/google">Google+</a>
                <p className="formMessage">
                    Some message
                </p>
                <form action="/auth/login" method="post">
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password"/>
                    </p>
                    <p>
                        <button type="submit">Login</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default LoginPage;