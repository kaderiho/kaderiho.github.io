import React from 'react';
import { render } from 'react-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            password: '',
            errors: {},
            email: ''
        };

        this.onSubmit = (event) => {
            event.preventDefault();

            this.setState({
                isLoading: true,
                errors: {}
            });

            this.props.userSignupRequest(this.state).then((res) => {
                this.setState({
                    isLoading: false
                });
            }, (error) => {
                this.setState({
                    errors: error.response.data,
                    isLoading: false
                });
            })
        };

        this.onChange = (event) => {
            this.setState({
                [event.target.name] : event.target.value
            });
        }
    }

    render() {
        const { errors, isLoading } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h2>Sign up</h2>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input placeholder="Put your email"
                           value={this.state.email}
                           onChange={this.onChange}
                           className="form-control"
                           type="text"
                           name="email"/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input placeholder="Put your password"
                           value={this.state.password}
                           onChange={this.onChange}
                           className="form-control"
                           name="password"
                           type="text"/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

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