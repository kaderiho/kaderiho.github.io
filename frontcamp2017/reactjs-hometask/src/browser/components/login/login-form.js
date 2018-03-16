import validateInput from '../../../shared/validations/signup'
import TextFieldGroup from '../common/text-field-group';
import { login } from '../../actions/loginActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

class LoginForm extends React.Component {
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

        this.onSubmit = (e) => {
            e.preventDefault();

            if (this.isValid()) {
                this.setState({
                    isLoading: true,
                    errors: {}
                });

                this.props.login({
                        password: this.state.password,
                        email: this.state.email
                    }).then(() => {
                        this.setState({redirect: '/', isLoading: false});
                    }, (err) => {
                        this.setState({errors: err.response.data, isLoading: false});
                    });
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
            return <Redirect to={redirect} />
        }

        return (
            <form onSubmit={this.onSubmit}>
                <h2>Login</h2>

                <TextFieldGroup onChange={this.onChange}
                                error={errors.email}
                                label="Email"
                                value={email}
                                field="email"
                                type="text"/>

                <TextFieldGroup onChange={this.onChange}
                                error={errors.password}
                                label="Password"
                                value={password}
                                field="password"
                                type="password"/>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                        Login
                    </button>
                </div>
            </form>
        )
    }
}

export default connect(null, { login })(LoginForm);