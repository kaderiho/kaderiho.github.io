import React from 'react';
import LoginForm from '../components/login/login-form';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="mx-auto" style={{width: '400px', marginTop: '100px'}}>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage;
