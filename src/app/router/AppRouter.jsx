import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

const appRoutes = (
    <div>
        <Route path="/" component={HomeContainer} />
    </div>
);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;

export default AppRouter;
