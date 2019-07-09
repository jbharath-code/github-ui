import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import BasicValidationRoute from './BasicValidationRoute';

const BundleLoader = () => <h3>Loading bundle</h3>

const NotFound = () => <h3>Not Found</h3>

const AsyncIntroContainer = Loadable({
	loader: () => import('containers/IntroContainer'),
	loading: BundleLoader
});

const AsyncGameContainer = Loadable({
	loader: () => import('containers/GameContainer'),
	loading: BundleLoader
});

const AsyncGameObservationContainer = Loadable({
	loader: () => import('containers/GameObservationContainer'),
	loading: BundleLoader
});

const AsyncGameEmpathizeContainer = Loadable({
	loader: () => import('containers/GameEmpathizeContainer'),
	loading: BundleLoader
});

const AsyncGameDefineContainer = Loadable({
	loader: () => import('containers/GameDefineContainer'),
	loading: BundleLoader
});

const AsyncGameIdeateContainer = Loadable({
	loader: () => import('containers/GameIdeateContainer'),
	loading: BundleLoader
});

const AsyncGamePrototypeContainer = Loadable({
	loader: () => import('containers/GamePrototypeContainer'),
	loading: BundleLoader
});

const AsyncGameTestContainer = Loadable({
	loader: () => import('containers/GameTestContainer'),
	loading: BundleLoader
});

const AsyncGameExecuteContainer = Loadable({
	loader: () => import('containers/GameObservationContainer'),
	loading: BundleLoader
});

const AsyncGameEndReportContainer = Loadable({
	loader: () => import('containers/GameEndReportContainer'),
	loading: BundleLoader
});

//[Todo] change the below function to load only necessary chunks based on current route
setTimeout(() => {
	Loadable.preloadAll();
}, 3000);

const DesktopRouter = (propsFromParent) => (
	<Switch>
		<Route exact path="/" render={(props) => (<h1>please update DesktopRouter</h1>)} />
		<BasicValidationRoute exact path="/intro" component={AsyncIntroContainer} />
		<BasicValidationRoute exact path="/game" component={AsyncGameContainer} />
		<BasicValidationRoute exact path="/game/observe" component={AsyncGameObservationContainer} />
		<BasicValidationRoute exact path="/game/empathize" component={AsyncGameEmpathizeContainer} />
		<BasicValidationRoute exact path="/game/define" component={AsyncGameDefineContainer} />
		<BasicValidationRoute exact path="/game/ideate" component={AsyncGameIdeateContainer} />
		<BasicValidationRoute exact path="/game/prototype" component={AsyncGamePrototypeContainer} />
		<BasicValidationRoute exact path="/game/test" component={AsyncGameTestContainer} />
		<BasicValidationRoute exact path="/game/execute" component={AsyncGameExecuteContainer} />
		<BasicValidationRoute exact path="/game/round/endReport" component={AsyncGameEndReportContainer} />
		<Route render={() => <NotFound />} />
	</Switch>
)

export default DesktopRouter;