import React, { Component} from 'react';
import { render } from 'react-dom';
import BlogsPage from '../browser/pages/blogs';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BlogsPage data={this.props.data}/>
            </div>
        )
    }
}

export default App;