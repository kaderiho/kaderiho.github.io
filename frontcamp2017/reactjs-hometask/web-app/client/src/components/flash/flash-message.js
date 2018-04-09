import React from 'react';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message } = this.props;

        return(
            <div className="alert">
                { message.text }
                <button className="close" onClick={ () => {
                    this.props.onDeleteFlashMessage(message)
                }}>
                <span>
                    &times;
                </span>
                </button>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        onDeleteFlashMessage: (message) => {
            dispatch(deleteFlashMessage(message));
        }
    }
}

export default connect(null, matchDispatchToProps)(FlashMessage);