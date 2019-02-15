import React from 'react';
import Square from '../Square/Square';
import Robot from '../Robot/Robot';
import styles from './RowStyles';

const Row = props => {
	const { row, y, robot } = props;
	return (
		<div style={styles.root}>
			{row.map((square, x) => (
				<Square key={x}>
					{x === robot.x && y === robot.y ? (
						<Robot direction={robot.direction} />
					) : null}
				</Square>
			))}
		</div>
	);
};

export default Row;
