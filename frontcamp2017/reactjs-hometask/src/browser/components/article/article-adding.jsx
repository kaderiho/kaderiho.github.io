import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { addBlog } from '../../actions/blogs';
import TextFieldGroup from '../common/text-field-group';
import shortid from 'shortid';

class ArticleAdding extends React.Component {
    constructor(initProps) {
        super(initProps);

        this.state = {
            author: '',
            message: ''
        };

        this.onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        };

        this.onSubmit = (e) => {
            const { message, author } = this.state;

            e.preventDefault();

            if (!message.trim() || !author.trim()) {
                return;
            }

            this.props.onSubmit({
                id: shortid.generate(),
                date: new Date(),
                author,
                message
            });

            this.setState({
                message: '',
                author: ''
            })
        }
    }

    render() {
        const { message, author } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup label="Your article message"
                                onChange={this.onChange}
                                field="message"
                                value={message}
                                type="text"/>

                <TextFieldGroup onChange={this.onChange}
                                label="Author name"
                                field="author"
                                value={author}
                                type="text"/>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Add
                    </button>
                </div>
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

export default connect(null, matchDispatchToProps)(ArticleAdding);
