import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { addBlog } from '../../actions/blogs';

let nextBlogId = 0;

class BlogAdding extends React.Component {
    constructor(initProps) {
        super(initProps);
    }

    render() {
        let inputMessage;
        let inputAuthor;

        return (
            <form onSubmit={(e) => {
                console.log(e);
                e.preventDefault();

                if (!inputMessage.value.trim() || !inputAuthor.value.trim()) {
                    return;
                }

                this.props.onSubmit({
                    author: inputAuthor.value,
                    text: inputMessage.value,
                    id: nextBlogId++,
                    date: new Date()
                });

                inputMessage.value = inputAuthor.value = '';
            }}>
                <p>
                    <label>
                        Put your message there: <br/>
                        <input ref={node => { inputMessage = node }}
                               placeholder="Your message"
                               type="text"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Author name: <br/>
                        <input ref={node => { inputAuthor = node }}
                               placeholder="Author nickname"
                               type="text"
                        />
                    </label>
                </p>
                <button type="submit" value="Submit">Add</button>
            </form>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return {
        onSubmit: (blog) => {
            dispatch(addBlog(blog))
        }
    }
}

export default connect(null, matchDispatchToProps)(BlogAdding);
