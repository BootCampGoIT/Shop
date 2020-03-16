import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import css from './CatalogPage.module.css';
import Gallery from './gallery/Gallery';
import Colors from './colors/Colors';

const CatalogPage = () => {
    return (
        <div className={css.catalogPage}>
            <h2>Catalog Page</h2>
            <Link to="/catalog/gallery">Gallery</Link><br />
            <Link to="/catalog/colors">Colors</Link>
            <Switch>
                <Route path="/catalog/gallery" component={Gallery} />
                <Route path="/catalog/colors" component={Colors} />
            </Switch>


        </div>
    );
}

export default CatalogPage;