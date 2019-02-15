import React, { Component } from 'react';
import Row from './components/Row/Row';
import Controls from './components/Controls/Controls';
import styles from './AppStyles';

const tableHeight = 5;
const tableWidth = 5;

const tableArray = [...Array(tableHeight)].map(e => Array(tableWidth).fill(''));

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			table: tableArray,
			robot: { x: null, y: null, direction: null },
		};
		this.handleChangeLeft = this.handleChangeLeft.bind(this);
		this.handleChangeRight = this.handleChangeRight.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handlePlace = this.handlePlace.bind(this);
		this.handleReport = this.handleReport.bind(this);
	}

	handlePlace(x, y, directionString) {
		let degrees, checkedX, checkedY;
		if (directionString === 'NORTH') {
			degrees = 180;
		} else if (directionString === 'SOUTH') {
			degrees = 0;
		} else if (directionString === 'EAST') {
			degrees = 270;
		} else if (directionString === 'WEST') {
			degrees = 90;
		}
		if (x < 0 || x > tableHeight - 1) {
			checkedX = null;
		} else {
			checkedX = x;
		}
		if (y < 0 || y > tableHeight - 1) {
			checkedY = null;
		} else {
			checkedY = y;
		}
		this.setState({
			robot: {
				x: checkedX,
				y: checkedY,
				direction: degrees,
			},
		});
	}
	handleChangeLeft(e) {
		this.setState({
			robot: {
				...this.state.robot,
				direction: this.state.robot.direction - 90,
			},
		});
	}
	handleChangeRight(e) {
		this.setState({
			robot: {
				...this.state.robot,
				direction: this.state.robot.direction + 90,
			},
		});
	}
	handleMove(e) {
		let move = { x: 0, y: 0 };
		if (this.state.robot.direction % 360 === 0) {
			move.y = -1;
		} else if (
			this.state.robot.direction % 360 === 270 ||
			this.state.robot.direction % 360 === -90
		) {
			move.x = 1;
		} else if (
			this.state.robot.direction % 360 === 180 ||
			this.state.robot.direction % 360 === -180
		) {
			move.y = 1;
		} else if (
			this.state.robot.direction % 360 === 90 ||
			this.state.robot.direction % 360 === -270
		) {
			move.x = -1;
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
		const { x, y } = this.state.robot;
		let directionString;
		if (this.state.robot.direction % 360 === 0) {
			directionString = 'SOUTH';
		} else if (
			this.state.robot.direction % 360 === 270 ||
			this.state.robot.direction % 360 === -90
		) {
			directionString = 'EAST';
		} else if (
			this.state.robot.direction % 360 === 180 ||
			this.state.robot.direction % 360 === -180
		) {
			directionString = 'NORTH';
		} else if (
			this.state.robot.direction % 360 === 90 ||
			this.state.robot.direction % 360 === -270
		) {
			directionString = 'WEST';
		}
		alert(`X is ${x}, Y is ${y}, Direction is ${directionString}`);
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
