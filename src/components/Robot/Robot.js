import React, { Component } from 'react';
import robot from '../../assets/robot.png';

class Robot extends Component {
	render() {
		const { direction } = this.props;
		return (
			<img
				src={robot}
				alt="robot"
				style={{
					width: '100%',
					height: '100%',
					transform: `rotate(${direction}deg)`,
				}}
			/>
		);
	}
}

export default Robot;
