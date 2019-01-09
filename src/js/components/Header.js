import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div>
                    <Navigation />
                </div> 
            </header>
        )
    }
}

export default Header;