import React from 'react';
import {render} from 'react-dom';

class BasicComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hello!</div>
    }
}

render(<BasicComponent/>, document.getElementById('app'));