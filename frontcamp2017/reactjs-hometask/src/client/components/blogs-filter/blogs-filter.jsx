import React from 'react';
import { render } from 'react-dom';

class BlogsFilter extends React.Component {
    constructor(initProps){
        super(initProps);

        this.filterHandler = (event) => {
            this.props.filterHandler(event.target.value);
        }
    }

    render() {
        let { filterText } = this.props;

        return (
            <input type="text" value={filterText} placeholder="Filter by author name" onChange={this.filterHandler}/>
        )
    }
}

export default BlogsFilter;