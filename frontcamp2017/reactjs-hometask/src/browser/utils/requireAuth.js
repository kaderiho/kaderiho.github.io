import { addFlashMessage } from '../actions/flashMessages';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

export default function(ComposedComponent) {
    class Authenticate extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                redirect: ''
            }
        }

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.setState({
                    redirect: '/auth/login'
                })
            }
        }

        render() {
            if (this.state.redirect) {
                return <Redirect to={this.state.redirect} />
            }

            return (

                <ComposedComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
