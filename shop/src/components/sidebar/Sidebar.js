import React, { Component } from 'react';
import css from './Sidebar.module.css';
import home from '../../assets/home.png';

import { NavLink } from 'react-router-dom'

// const initialState = {
//     isCatalogPageOpen: false,
//     isCategoriesPageOpen: false
// }


class Sidebar extends Component {
    state = {
        // ...initialState,
        isCatalogPageOpen: false,
        isCategoriesPageOpen: false
    }


    getCurrentPage = (e) => {
        e.persist();
        const modal = e.target.dataset.modal;
        this.setState(prevState => ({
            // ...initialState,
            [modal]: !prevState[modal]
        }))
    }

    render() {
        const { isCategoriesPageOpen, isCatalogPageOpen } = this.state;
        return (
            <div className={css.sidebar}>
                <div className={css.logoTitle}>
                    <img src={home} alt="logo" className={css.homeLogo} />
                    <span>Terracot</span>
                </div>

                <NavLink
                    exact to='/categories'
                    data-modal="isCategoriesPageOpen"
                    onClick={this.getCurrentPage}
                    className={css.link}
                    activeClassName={css.activeLink}> Categories </NavLink>

                {isCategoriesPageOpen &&
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <NavLink to="/categories/roof">Roof</NavLink>
                        <NavLink to="/categories/wall">Wall</NavLink>
                        <NavLink to="/categories/window">Window</NavLink>
                        <NavLink to="/categories/door">Door</NavLink>
                    </div>}

                <NavLink
                    to='/catalog'
                    data-modal="isCatalogPageOpen"
                    onClick={this.getCurrentPage}
                    className={css.link}
                    activeClassName={css.activeLink}> Catalog </NavLink>

                {isCatalogPageOpen &&
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <NavLink to="/catalog/roof">Roof</NavLink>
                        <NavLink to="/catalog/wall">Wall</NavLink>
                        <NavLink to="/catalog/window">Window</NavLink>
                        <NavLink to="/catalog/door">Door</NavLink>
                    </div>}
            </div >
        );
    }
}

export default Sidebar;