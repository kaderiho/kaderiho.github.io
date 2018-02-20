import React from 'react';
import { render } from 'react-dom';

class BlogsFilter extends React.Component {
    constructor(props){
        super(props);

        this.filterHandler = this.filterHandler.bind(this);
    }

    filterHandler(event) {
        this.props.filterHandler(event.target.value);
    }

    render() {
        let filterText = this.props.filterText;

        return (
            <input type="text" value={filterText} placeholder="Filter by author name" onChange={this.filterHandler}/>
        )
    }
}

export default BlogsFilter;