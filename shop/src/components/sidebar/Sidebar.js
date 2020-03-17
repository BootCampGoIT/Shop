import React, { Component } from 'react';
import css from './Sidebar.module.css';
import home from '../../assets/home.png';

import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    state = {
        isOpen: false,
        currentPage: ""
    }

    getCurrentPage = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            currentPage: name,
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const { currentPage, isOpen } = this.state;
        return (
            <div className={css.sidebar}>
                <div className={css.logoTitle}>
                    <img src={home} alt="logo" className={css.homeLogo} />
                    <span>Terracot</span>
                </div>

                <NavLink
                    exact to='/categories'
                    name="categories"
                    onClick={this.getCurrentPage}
                    className={css.link}
                    activeClassName={css.activeLink}> Categories </NavLink>

                {currentPage === "categories" && isOpen &&
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <NavLink to="/roof">Roof</NavLink>
                        <NavLink to="/wall">Wall</NavLink>
                        <NavLink to="/window">Window</NavLink>
                        <NavLink to="/door">Door</NavLink>
                    </div>}

                <NavLink to='/catalog' name="catalog" className={css.link} activeClassName={css.activeLink}> Catalog </NavLink>
            </div >
        );
    }
}

export default Sidebar;