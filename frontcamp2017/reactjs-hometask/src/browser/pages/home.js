import React from 'react';
import { render } from 'react-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Its a home page!</h1>
            </div>
        )
    }
}

export default Home;