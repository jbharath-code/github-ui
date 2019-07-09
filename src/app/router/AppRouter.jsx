import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import DesktopDashboardContainer from '../containers/DesktopDashboardContainer';

const appRoutes = (
    <div>
        <Route path="/" component={DesktopDashboardContainer} />
    </div>
);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;

export default AppRouter;
