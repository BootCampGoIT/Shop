import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import css from './CatalogPage.module.css';
import Gallery from './gallery/Gallery';
import Colors from './colors/Colors';
import Roof from './categories/roof/Roof';
import Wall from './categories/wall/Wall';
import Window from './categories/window/Window';
import Door from './categories/door/Door';

const CatalogPage = () => {
    return (
        <div className={css.catalogPage}>
            <h2>Catalog Page</h2>
            <Link to="/catalog/gallery" to={{
                pathname: '/catalog/gallery',
                state: { from: '/catalog', fff: " catalog" },
            }}  >Gallery</Link><br />
            <Link to="/catalog/colors">Colors</Link>
            <Switch>
                <Route path="/catalog/gallery" component={Gallery} />
                <Route path="/catalog/colors" component={Colors} />
                <Route path="/catalog/roof" component={Roof} />
                <Route path="/catalog/wall" component={Wall} />
                <Route path="/catalog/window" component={Window} />
                <Route path="/catalog/door" component={Door} />
            </Switch>
        </div>
    );
}

export default CatalogPage;