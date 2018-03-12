import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { visibilityFilter } from '../../actions/filter';

class BlogsFilter extends React.Component {
    constructor(initProps){
        super(initProps);
    }

    render() {
        let filterInput;

        return (
            <input onChange={() => this.props.onChange(filterInput.value)}
                   placeholder="Filter by author name"
                   ref={node => filterInput = node}
                   type="text" />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (filterText) => {
            dispatch(visibilityFilter(filterText));
        }
    }
}

// export default connect(null, mapDispatchToProps)(BlogsFilter);
export default BlogsFilter