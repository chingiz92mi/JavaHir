import React from 'react';
import {NavLink} from 'react-router-dom';



const Navigation = () => {
    return(
        <div className="navigation">
            <NavLink activeClassName="active" to="/movie">Movie</NavLink>
            <NavLink activeClassName="active" to="/video">Video</NavLink>
            <NavLink activeClassName="active" to="/music">Music</NavLink>
        </div>
    );
};

export default Navigation;