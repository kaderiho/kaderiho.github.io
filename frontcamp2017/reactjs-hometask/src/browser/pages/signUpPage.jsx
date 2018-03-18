import React from 'react';
import SignUpForm from '../components/signup/signup-form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import { addFlashMessage } from '../actions/flashMessages';

class SignUpPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { userSignupRequest, addFlashMessage } = this.props;

        return (
            <div className="row">
                <div className="mx-auto" style={{width: '400px', marginTop: '100px'}}>
                    <SignUpForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
                </div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignUpPage);
