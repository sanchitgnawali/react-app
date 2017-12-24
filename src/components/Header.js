import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = ()=> (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active-link" exact={true}>Home | </NavLink>
        <NavLink to="/create" activeClassName="active-link">Add Expenses</NavLink>
    </header>
);

export default Header;