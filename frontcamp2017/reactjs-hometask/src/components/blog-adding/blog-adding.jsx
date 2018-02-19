import React from 'react';
import { render } from 'react-dom';

class BlogAdding extends React.Component {
    constructor(props) {
        super(props);

        this.inputMessageHandler = this.inputMessageHandler.bind(this);
        this.submitMessageHandler = this.submitMessageHandler.bind(this);
        this.inputMessageAuthorHandler = this.inputMessageAuthorHandler.bind(this);

        this.state = {
            isSubmitButtonEnabled: false
        }
    }

    inputMessageHandler(event) {
        this.props.inputMessageHandler(event.target.value);
    }

    inputMessageAuthorHandler(event) {
        this.props.inputMessageAuthorHandler(event.target.value);
    }

    submitMessageHandler(event) {
        this.props.submitMessageHandler();
        event.preventDefault();
    }

    render(){
        const typingPostMessage = this.props.typingPostMessage;
        const postAuthor = this.props.postAuthor;

        return (
            <form onSubmit={this.submitMessageHandler}>
                <label>
                    Post message:
                    <input type="text" value={typingPostMessage} onChange={this.inputMessageHandler} placeholder="Put post message there"/>
                </label>
                <label>
                    Author name:
                    <input type="text" value={postAuthor} onChange={this.inputMessageAuthorHandler} placeholder="Put post message there"/>
                </label>
                <button type="submit" value="Submit" disabled={!this.props.typingPostMessage.length}>Add</button>
            </form>
        );
    }
}

export default BlogAdding;