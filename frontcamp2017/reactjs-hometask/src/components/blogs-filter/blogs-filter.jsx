import React from 'react';
import { render } from 'react-dom';

class BlogsFilter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <input type="text" placeholder="Filter by author name"/>
        )
    }
}

export default BlogsFilter;