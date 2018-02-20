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
        const inputPostMessage = this.props.inputPostMessage;
        const inputPostAuthor = this.props.inputPostAuthor;

        return (
            <form onSubmit={this.submitMessageHandler}>
                <p>
                    <label>
                        Put your message there: <br/>
                        <input type="text" value={inputPostMessage} onChange={this.inputMessageHandler} placeholder="Your message"/>
                    </label>
                </p>
                <p>
                    <label>
                        Author name: <br/>
                        <input type="text" value={inputPostAuthor} onChange={this.inputMessageAuthorHandler} placeholder="Author nickname"/>
                    </label>
                </p>
                <button type="submit" value="Submit" disabled={!this.props.inputPostMessage.length || !this.props.inputPostAuthor.length}>Add</button>
            </form>
        );
    }
}

export default BlogAdding;