import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import '../sass/main.scss';

class Inde extends Component {
    render() {
        return(
            <div>
                <App />
            </div>
        );
    }
}


ReactDOM.render(<Inde />, document.getElementById('root'));