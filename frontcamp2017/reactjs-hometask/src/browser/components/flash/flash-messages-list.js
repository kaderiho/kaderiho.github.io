import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from './flash-message';

class FlashMessagesList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                {this.props.messages.map((message) => <FlashMessage key={message.id} message={message} />)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, {})(FlashMessagesList);