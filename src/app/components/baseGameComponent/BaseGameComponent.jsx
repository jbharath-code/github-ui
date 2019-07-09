import React, { Component } from 'react';
import styles from './baseGameComponent.module.sass';
import applyWrappers from 'util/ComponentWrapper';

class BaseGameComponent extends Component {

	renderPhaseContent = () => {
		console.log("This is in the renderPhaseContent of BaseGameComponent");
		return (
			<div>
				<div>
					{this.renderLeftSideContent()}
				</div>
				<div>
					{this.renderCanvasContent()}
				</div>
			</div>
		);
	}

	render() {
		console.log("This is in the render of BaseGameComponent");
		return (
			<div>
				{this.renderPhaseContent()}
			</div>
		);
	}

}

export default BaseGameComponent;
