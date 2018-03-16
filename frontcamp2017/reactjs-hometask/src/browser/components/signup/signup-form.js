import validateInput from '../../../shared/validations/signup'
import TextFieldGrop from '../common/text-field-group';
import { Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            redirect: '',
            password: '',
            errors: {},
            email: ''
        };

        this.isValid = () => {
            const { errors, isValid } = validateInput(this.state);

            if (!isValid) {
                this.setState({ errors });
            }

            return isValid;
        };

        this.onSubmit = (event) => {
            event.preventDefault();

            // Pre-validation before submit form
            if (this.isValid()) {
                this.setState({
                    isLoading: true,
                    errors: {}
                });

                this.props.userSignupRequest(this.state).then((res) => {
                    this.setState({
                        isLoading: false,
                        redirect: '/'
                    });
                }, (error) => {
                    this.setState({
                        errors: error.response.data,
                        isLoading: false
                    });
                })
            }

        };

        this.onChange = (event) => {
            this.setState({
                [event.target.name] : event.target.value
            });
        }
    }

    render() {
        const { errors, isLoading, email, password, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/"/>
        }

        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign up</h2>

                <TextFieldGrop onChange={this.onChange}
                               error={errors.email}
                               label="Email"
                               value={email}
                               field="email"
                               type="text"/>

                <TextFieldGrop onChange={this.onChange}
                               error={errors.password}
                               label="Password"
                               value={password}
                               field="password"
                               type="password"/>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                        Signup
                    </button>
                </div>
            </form>
        )
    }
}

export default SignUpForm;