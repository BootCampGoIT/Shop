import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roof from './categories/roof/Roof';
import Wall from './categories/wall/Wall';
import Window from './categories/window/Window';
import Door from './categories/door/Door';

const HomePage = () => {
    return (
        <>
            <h2>Categories</h2>
            <Switch>
                <Route path="/categories/roof" component={Roof} />
                <Route path="/categories/wall" component={Wall} />
                <Route path="/categories/window" component={Window} />
                <Route path="/categories/door" component={Door} />
            </Switch>
        </>
    );
}

export default HomePage;