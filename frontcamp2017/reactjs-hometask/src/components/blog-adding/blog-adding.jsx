import React from 'react';
import { render } from 'react-dom';

class BlogAdding extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.onBlogInputChange(event.target.value);
    }

    handleSubmit(event) {
        this.props.onBlogSubmitHandle();
        event.preventDefault();
    }

    render(){
        const blogText = this.props.addingBlogText;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={blogText} onChange={this.handleChange} placeholder="Put post message there"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default BlogAdding;