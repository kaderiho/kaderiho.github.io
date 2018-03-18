import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { visibilityFilter } from '../../actions/filter';
import TextFieldGroup from '../common/text-field-group';

class ArticlesFilter extends React.Component {
    constructor(initProps){
        super(initProps);

        this.state = {
            filter: ''
        };

        this.onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
            this.props.visibilityFilter(e.target.value);
        };
    }

    render() {
        return (
            <TextFieldGroup label="Filter by author name"
                            onChange={this.onChange}
                            value={this.state.filter}
                            field="filter"
                            type="text"/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        visibilityFilter: (filterText) => {
            dispatch(visibilityFilter(filterText));
        }
    }
}

export default connect(null, mapDispatchToProps)(ArticlesFilter);
