import React from 'react';
import robot from '../../assets/robot.png';

const Robot = props => {
	const { direction } = props;
	let rotation;
	switch (direction) {
		case 'NORTH':
			rotation = 180;
			break;
		case 'SOUTH':
			rotation = 0;
			break;
		case 'EAST':
			rotation = 270;
			break;
		case 'WEST':
			rotation = 90;
			break;
		default:
			break;
	}
	return (
		<img
			src={robot}
			alt="robot"
			style={{
				width: '100%',
				height: '100%',
				transform: `rotate(${rotation}deg)`,
			}}
		/>
	);
};

export default Robot;
