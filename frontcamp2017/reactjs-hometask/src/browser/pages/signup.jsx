import React from 'react';
import { render } from 'react-dom';

class SignupPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>
                    Signup page
                </h1>
                <form action="/signup" method="post">
                    <p>
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" name="password"/>
                    </p>
                    <p>
                        <button type="submit">Signup</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default SignupPage;