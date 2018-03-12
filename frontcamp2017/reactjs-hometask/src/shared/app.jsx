import React, { Component} from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    Basic component, data: {this.props.data}
                </h1>
            </div>
        )
    }
}

export default App;