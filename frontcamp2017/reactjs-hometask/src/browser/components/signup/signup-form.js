import React from 'react';
import { render } from 'react-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = (event) => {
            this.props.onSubmit(event);
        };

        this.onChange = (event) => {
            this.props.onChange(event);
        }
    }

    render() {
        return (
            <form action="/" onSubmit={this.onSubmit}>
                <h2>Sign up</h2>
                <p>
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.onChange} value={this.props.user.email}/>
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.onChange} value={this.props.user.password}/>
                </p>
                <p>
                    <button type="submit">Signup</button>
                </p>
            </form>
        )
    }

}

export default SignUpForm;