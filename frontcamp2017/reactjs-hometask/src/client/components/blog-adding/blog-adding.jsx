import React from 'react';
import { render } from 'react-dom';

class BlogAdding extends React.Component {
    constructor(initProps) {
        super(initProps);

        const { props } = this;

        this.state = {
            isSubmitButtonEnabled: false
        };

        this.inputMessageHandler = (event) => {
            props.inputMessageHandler(event.target.value);
        };

        this.inputMessageAuthorHandler = (event) => {
            props.inputMessageAuthorHandler(event.target.value);
        };

        this.submitMessageHandler = (event) => {
            props.submitMessageHandler();
            event.preventDefault();
        }
    }

    render(){
        const { props } = this;
        const { inputPostAuthor, inputPostMessage } = props;

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
                <button type="submit" value="Submit" disabled={!inputPostMessage.length || !inputPostAuthor.length}>Add</button>
            </form>
        );
    }
}

export default BlogAdding;