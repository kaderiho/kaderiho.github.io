import React from 'react';
import { render } from 'react-dom';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        )
    }
}

export default HomePage;