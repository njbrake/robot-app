import React, { Component } from 'react';
import Square from '../Square/Square';
import Robot from '../Robot/Robot';
import styles from './RowStyles';

class Row extends Component {
	render() {
		const { row, y, robot } = this.props;
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
	}
}

export default Row;
