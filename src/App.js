import React, { Component } from 'react';
import Row from './components/Row/Row';
import Controls from './components/Controls/Controls';
import styles from './AppStyles';

const tableHeight = 5;
const tableWidth = 5;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			table: [...Array(tableHeight)].map(e => Array(tableWidth).fill('')),
			robot: { x: null, y: null, direction: null },
		};
		this.handleChangeLeft = this.handleChangeLeft.bind(this);
		this.handleChangeRight = this.handleChangeRight.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handlePlace = this.handlePlace.bind(this);
		this.handleReport = this.handleReport.bind(this);
	}

	handlePlace(x, y, direction) {
		let checkedX, checkedY, directionString;

		if (x < 0 || x > tableHeight - 1 || y < 0 || y > tableHeight - 1) {
			checkedX = null;
			checkedY = null;
			directionString = null;
		} else {
			checkedX = x;
			checkedY = y;
			directionString = direction;
		}
		this.setState({
			robot: {
				x: checkedX,
				y: checkedY,
				direction: directionString,
			},
		});
	}
	handleChangeLeft(e) {
		let newDirection;
		switch (this.state.robot.direction) {
			case 'NORTH':
				newDirection = 'WEST';
				break;
			case 'SOUTH':
				newDirection = 'EAST';
				break;
			case 'EAST':
				newDirection = 'NORTH';
				break;
			case 'WEST':
				newDirection = 'SOUTH';
				break;
			default:
				break;
		}
		this.setState({
			robot: {
				...this.state.robot,
				direction: newDirection,
			},
		});
	}
	handleChangeRight(e) {
		let newDirection;
		switch (this.state.robot.direction) {
			case 'NORTH':
				newDirection = 'EAST';
				break;
			case 'SOUTH':
				newDirection = 'WEST';
				break;
			case 'EAST':
				newDirection = 'SOUTH';
				break;
			case 'WEST':
				newDirection = 'NORTH';
				break;
			default:
				break;
		}
		this.setState({
			robot: {
				...this.state.robot,
				direction: newDirection,
			},
		});
	}
	handleMove(e) {
		let move = { x: 0, y: 0 };
		switch (this.state.robot.direction) {
			case 'NORTH':
				move.y = 1;
				break;
			case 'SOUTH':
				move.y = -1;
				break;
			case 'EAST':
				move.x = 1;
				break;
			case 'WEST':
				move.x = -1;
				break;
			default:
				break;
		}
		if (
			this.state.robot.x + move.x < 0 ||
			this.state.robot.y + move.y < 0 ||
			this.state.robot.x + move.x > tableWidth - 1 ||
			this.state.robot.y + move.y > tableHeight - 1
		) {
			return;
		}
		this.setState({
			robot: {
				...this.state.robot,
				x: this.state.robot.x + move.x,
				y: this.state.robot.y + move.y,
			},
		});
	}
	handleReport() {
		const { x, y, direction } = this.state.robot;
		alert(`X is ${x}, Y is ${y}, Direction is ${direction}`);
	}
	render() {
		const { table, robot } = this.state;
		return (
			<div className="App" style={styles.root}>
				<Controls
					handleMove={this.handleMove}
					handleChangeLeft={this.handleChangeLeft}
					handleChangeRight={this.handleChangeRight}
					handlePlace={this.handlePlace}
					handleReport={this.handleReport}
				/>
				<div styles={styles.table}>
					{table
						.map((row, y) => <Row key={y} row={row} y={y} robot={robot} />)
						.reverse()}
				</div>
			</div>
		);
	}
}

export default App;
