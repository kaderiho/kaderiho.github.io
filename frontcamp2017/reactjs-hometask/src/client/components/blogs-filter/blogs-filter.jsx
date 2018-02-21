import React from 'react';
import { render } from 'react-dom';

class BlogsFilter extends React.Component {
    constructor(initProps){
        super(initProps);

        const { props } = this;

        this.filterHandler = (event) => {
            props.filterHandler(event.target.value);
        }
    }

    render() {
        const { props } = this;
        let filterText = props.filterText;

        return (
            <input type="text" value={filterText} placeholder="Filter by author name" onChange={this.filterHandler}/>
        )
    }
}

export default BlogsFilter;