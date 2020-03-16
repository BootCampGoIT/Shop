import React, { Component } from 'react';
import css from './Sidebar.module.css';

import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div className={css.sidebar}>
                <NavLink exact to='/' className={css.link} activeClassName={css.activeLink}> Home </NavLink>
                <NavLink to='/catalog' className={css.link} activeClassName={css.activeLink}> Catalog </NavLink>
            </div>
        );
    }
}

export default Sidebar;