import React from 'react';
import LoginForm from '../components/login/login-form';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-off-set-4">
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage;
