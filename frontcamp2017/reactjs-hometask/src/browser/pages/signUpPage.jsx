import React from 'react';
import SignUpForm from '../components/signup/signup-form';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser  = this.changeUser.bind(this);
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    processForm(event) {
        event.preventDefault();

        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/signup');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';

        // xhr.addEventListener('load', () => {
        //     if (xhr.status === 200) {
        //
        //         // change the component-container state
        //         this.setState({
        //             errors: {}
        //         });
        //
        //         console.log('The form is valid');
        //     } else {
        //         // failure
        //
        //         const errors = xhr.response.errors ? xhr.response.errors : {};
        //         errors.summary = xhr.response.message;
        //
        //         this.setState({
        //             errors
        //         });
        //     }
        // });
        xhr.send(formData);
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
