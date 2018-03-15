import React from 'react';
import SignUpForm from '../components/signup/signup-form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignUpPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { userSignupRequest } = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest })(SignUpPage);
