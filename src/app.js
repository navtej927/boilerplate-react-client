import React, { lazy, Suspense } from 'react';
import { Navbar } from './shared/navbar';
import { Home } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CounterProvider } from './contexts/counter';

const LazyAboutPage = lazy(() =>
  import(/* webpackChunkName: "AboutPage" */ './pages/about'),
);

export const App = () => {
  return (
    <Router>
      <CounterProvider>
        <Navbar />
        <Switch>
          <Route path="/about">
            <Suspense fallback={<div>LOADING...</div>}>
              <LazyAboutPage />
            </Suspense>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </CounterProvider>
    </Router>
  );
};
