import React from 'react';
import Sidebar from './sidebar/Sidebar';
import css from './App.module.css';
import Header from './header/Header';
import Container from './container/Container';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';

const App = () => {
    return (
        <div className={css.app}>
            <Sidebar />
            <div className={css.mainBlock}>
                <Header />
                <Container>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />
                    </Switch>
                </Container>
            </div>

        </div>
    );
}

export default App;