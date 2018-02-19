import React from 'react';
import { render } from 'react-dom';

class BlogAdding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogText: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({blogText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.blogText} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default BlogAdding;