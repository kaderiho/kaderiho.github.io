import React from 'react';
import SignUpForm from '../components/signup/signup-form';

class SignUpPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = (event) => {
            event.preventDefault();

            const email = encodeURIComponent(this.state.user.email);
            const password = encodeURIComponent(this.state.user.password);
            const formData = `email=${email}&password=${password}`;

            const xhr = new XMLHttpRequest();
            xhr.open('post', '/auth/signup');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.responseType = 'json';

            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    // set a message
                    localStorage.setItem('successMessage', xhr.response.message);

                    // make a redirect

                    this.context.router.replace('/login');
                } else {
                    // failure

                    const errors = xhr.response.errors ? xhr.response.errors : {};
                    errors.summary = xhr.response.message;

                    this.setState({
                        errors
                    });
                }
            });

            xhr.send(formData);
        };

        this.changeUser = (event) => {
            const field = event.target.name;
            const user = this.state.user;
            user[field] = event.target.value;

            this.setState({
                user
            });
        }
    }

    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                user={this.state.user}
            />
        )
    }
}

export default SignUpPage;
