import React, { lazy, Suspense } from 'react';
import Sidebar from './sidebar/Sidebar';
import css from './App.module.css';
import Header from './header/Header';
import Container from './container/Container';
import { Switch, Route, Redirect } from 'react-router-dom'
import Spinner from './spinner/Spiner';
import Loadable from 'react-loadable';
// import HomePage from '../pages/HomePage';
// import CatalogPage from '../pages/CatalogPage';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const CatalogPage = lazy(() => import('../pages/CatalogPage'));

const HomePage = Loadable({
    loader: () => import('../pages/HomePage'  /* webpackChunkName: "HomePage" */),
    loading: () => <p>...Loading </p>,
});

const CatalogPage = Loadable({
    loader: () => import('../pages/CatalogPage' /* webpackChunkName: "CatalogPage" */),
    loading: Spinner,
});


const App = (props) => {
    return (
        <div className={css.app}>

            <Sidebar />
            <div className={css.mainBlock}>
                <Header />
                <Container>
                    <Switch>
                        {/* <Suspense fallback={<Spiner />}>
                            <Route path="/categories" component={HomePage} />
                            <Route path="/catalog" component={CatalogPage} />
                     
                        </Suspense> */}

                        <Route path="/categories" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />


                    </Switch>
                </Container>
            </div>

        </div>
    );
}

export default App;